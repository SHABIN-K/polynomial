import { useMemo, useState } from "react";
import MarketCard from "./components/MarketCard";
import EmptyMessage from "@/components/EmptyMessage";
import MarketTopNavbar from "./components/MarketTopNavbar";
import MarketSearchBar from "./components/MarketSearchBar";
import MarketBottomNavbar from "./components/MarketBottomNavbar";

import useWatchlistStore from "@/store/useWatchlistStore";

import { assets } from "@/constants";

const MarketsPage = () => {
  const { showWatchlistOnly, watchlist } = useWatchlistStore();
  const [query, setQuery] = useState("");

  const filteredAssets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const baseAssets = showWatchlistOnly
      ? assets.filter((a) => watchlist.includes(a.id))
      : assets;

    if (!normalizedQuery) return baseAssets;

    return baseAssets.filter((a) =>
      a.name.toLowerCase().includes(normalizedQuery) ||
      a.symbol.toLowerCase().includes(normalizedQuery)
    );
  }, [showWatchlistOnly, query, watchlist]);

  return (
    <>
      <MarketTopNavbar />
      <MarketSearchBar query={query} setQuery={setQuery} />
      <div className="flex flex-col mx-auto">
        {filteredAssets.length === 0 ? (
          <EmptyMessage subtitle="Try adjusting your search or watchlist filter" />
        ) : (
          filteredAssets.map((asset) => (
            <MarketCard key={asset.id} asset={asset} />
          ))
        )}
      </div>
      <MarketBottomNavbar />
    </>
  );
};

export default MarketsPage;