import React, { useState } from "react";
import { useParams } from "react-router-dom";

import TradeForm from "./components/TradeForm";
import TradeHeader from "./components/TradeHeader";
import TradeActions from "./components/TradeAction";

const TradePage = () => {
  const [orderSide, setOrderSide] = useState("buy");

  const { marketSymbol } = useParams();
  return (
    <main className="flex flex-col pb-28 h-screen">
      <TradeHeader />
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
