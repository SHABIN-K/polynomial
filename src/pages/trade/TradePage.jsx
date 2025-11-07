import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getPolynomialClient } from "@/lib/polynomialfi";
import { normalizeSingleMarketData } from "@/utils/normalizeMarketData";

import TradeForm from "./components/TradeForm";
import AppLoader from "@/components/AppLoader";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";
import QueryErrorMessage from "@/components/QueryErrorMessage";

const TradePage = () => {
  const { marketSymbol } = useParams();
  const [orderSide, setOrderSide] = useState("buy");

  const { data: market = [], isLoading, isError, error } = useQuery({
    queryKey: ["singlemarket", marketSymbol],
    queryFn: async () => {
      if (!marketSymbol) return null;
      const client = await getPolynomialClient();
      const raw = await client.markets.getMarketBySymbol(marketSymbol);
      return normalizeSingleMarketData(raw);
    },
    staleTime: 60 * 1000,
    refetchInterval: 30000,
  });

  if (isLoading) return <AppLoader />;

  if (isError) return <QueryErrorMessage title="Failed to load markets" error={error} />;

  return (
    <main className="flex flex-col pb-28 h-screen">
      <TradeHeader market={market} />
      <TradeForm orderSide={orderSide} />
      <TradeActions
        marketSymbol={marketSymbol}
        orderSide={orderSide}
        setOrderSide={setOrderSide}
      />
    </main>
  )
};

export default TradePage;
