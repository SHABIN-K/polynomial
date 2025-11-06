import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import TopNavbar from "@/components/TopNavbar";
import AppLoader from "@/components/AppLoader";
import MarketCard from "./components/MarketCard";
import EmptyMessage from "@/components/EmptyMessage";
import BottomNavbar from "@/components/BottomNavbar";
import MarketSearchBar from "./components/MarketSearchBar";

import { polynomialClient } from "@/lib/polynomialfi";
import useWatchlistStore from "@/store/useWatchlistStore";
import { normalizeMarketData } from "@/utils/normalizeMarketData";

const MarketsPage = () => {
  const { showWatchlistOnly, watchlist } = useWatchlistStore();
  const [query, setQuery] = useState("");

  // ---- Fetch market data  ----
  const { data: markets = [], isLoading, isError, error } = useQuery({
    queryKey: ["markets"],
    queryFn: async () => {
      const rawMarkets = await polynomialClient.markets.getMarkets();
      return rawMarkets.slice(0, 25).map(normalizeMarketData);
    },
    staleTime: 60 * 1000,
    // refetchInterval: 30000,
  });

  // ---- Filter & Search Logic ----
  const filteredMarkets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    const visibleMarkets = showWatchlistOnly
      ? markets.filter((m) => watchlist.includes(m.id))
      : markets

    if (!normalizedQuery) return visibleMarkets

    return visibleMarkets.filter((m) => m.symbol.toLowerCase().includes(normalizedQuery))
  }, [markets, query, showWatchlistOnly, watchlist])

  if (isLoading) return <AppLoader />;

  if (isError)
    return (
      <div className="py-20 text-center text-gray-400">
        <p>⚠️ Failed to load markets</p>
        <p className="text-xs mt-1">{error?.message || "Unknown error"}</p>
      </div>
    );

  return (
    <main className="py-16">
      <TopNavbar />
      <MarketSearchBar query={query} setQuery={setQuery} />
      <div className="flex flex-col mx-auto">
        {filteredMarkets.length === 0 ? (
          <EmptyMessage subtitle="Try adjusting your search or watchlist filter" />
        ) : (
          filteredMarkets.map((asset) => (
            <MarketCard key={asset.id} asset={asset} />
          ))
        )}
      </div>
      <BottomNavbar />
    </main>
  );
};

export default MarketsPage;