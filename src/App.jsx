import { useEffect, lazy } from "react";
import { sdk } from "@farcaster/frame-sdk";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MarketsPage from "./pages/MarketsPage";
const TradePage = lazy(() => import("./pages/TradePage"));
const PositionsPage = lazy(() => import("./pages/PositionsPage"));

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketsPage />} />
        <Route path="/trade/:marketSymbol" element={<TradePage />} />
        <Route path="/positions" element={<PositionsPage />} />
        {/* Redirect any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
