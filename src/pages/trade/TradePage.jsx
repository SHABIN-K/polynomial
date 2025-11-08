import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { getPolynomialClient } from "@/lib/polynomialfi";
import { normalizeSingleMarketData } from "@/utils/normalizeMarketData";

import TradeForm from "./components/TradeForm";
import AppLoader from "@/components/AppLoader";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";
import QueryErrorMessage from "@/components/QueryErrorMessage";

const TradePage = () => {
  const { marketSymbol } = useParams();
  const navigate = useNavigate();
  const [orderSide, setOrderSide] = useState("buy");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["singlemarket", marketSymbol],
    queryFn: async () => {
      if (!marketSymbol) {
        navigate("/");
      }
      
      const client = await getPolynomialClient();

      // get market info
      const raw = await client.markets.getMarketBySymbol(marketSymbol);

      // get user position for that market
      const summary = await client.accounts.getPositionByMarket(raw.marketId);

      return {
        market: normalizeSingleMarketData(raw),
        position: summary || {},
      };
    },
    staleTime: 60 * 1000,
  });


  if (isLoading) return <AppLoader />;

  if (isError) return <QueryErrorMessage title="Failed to load markets" error={error} />;

  return (
    <main className="flex flex-col pb-28 h-screen">
      <TradeHeader market={data?.market} />
      <TradeForm
        orderSide={orderSide}
        marketSymbol={marketSymbol}
        market={data?.market}
        position={data?.position}
      />
      <TradeActions
        marketSymbol={marketSymbol}
        orderSide={orderSide}
        setOrderSide={setOrderSide}
      />
    </main>
  )
};

export default TradePage;
