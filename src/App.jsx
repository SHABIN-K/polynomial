import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, lazy } from "react";
import { sdk } from "@farcaster/frame-sdk";

import TopNavBar from "./Components/TopNavBar";
import MarketsPage from "./pages/MarketsPage";
import BottomNavBar from "./Components/BottomNavBar";
const TradePage = lazy(() => import("./pages/TradePage"));
const PositionsPage = lazy(() => import("./pages/PositionsPage"));

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <Router>
      <div className="relative bg-[#f3f3f3] min-h-screen">
        <TopNavBar />
        <Routes>
          <Route path="/" element={<MarketsPage />} />
          <Route path="/trade/:marketSymbol" element={<TradePage />} />
          <Route path="/positions" element={<PositionsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
