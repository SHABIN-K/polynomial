import React from "react";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";
import { useParams } from "react-router-dom";

const TradePage = () => {
  const { marketSymbol } = useParams();
  return (
    <div className="">
      <TradeHeader />
      <TradeActions marketSymbol={marketSymbol} />
    </div>
  )
};

export default TradePage;
