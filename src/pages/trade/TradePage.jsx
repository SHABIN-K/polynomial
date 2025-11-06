import React from "react";
import { useParams } from "react-router-dom";

import TradeForm from "./components/TradeForm";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";

const TradePage = () => {
  const { marketSymbol } = useParams();
  return (
    <div>
      <TradeHeader />
      <TradeForm />
      <TradeActions marketSymbol={marketSymbol} />
    </div>
  )
};

export default TradePage;
