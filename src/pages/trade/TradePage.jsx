import React from "react";
import { useParams } from "react-router-dom";

import TradeForm from "./components/TradeForm";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";

const TradePage = () => {
  const { marketSymbol } = useParams();
  return (
    <main className="flex flex-col pb-28 h-screen">
      <TradeHeader />
      <TradeForm />
      <TradeActions marketSymbol={marketSymbol} />
    </main>
  )
};

export default TradePage;
