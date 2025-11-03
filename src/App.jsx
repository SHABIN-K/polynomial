import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, lazy } from "react";
import { sdk } from "@farcaster/frame-sdk";

import MarketsPage from "./pages/MarketsPage";
const TradePage = lazy(() => import("./pages/TradePage"));
const PositionsPage = lazy(() => import("./pages/PositionsPage"));

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<MarketsPage />} />
          <Route path="/trade/:marketSymbol" element={<TradePage />} />
          <Route path="/positions" element={<PositionsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
