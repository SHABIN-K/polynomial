import { useEffect } from "react";
import { sdk } from "@farcaster/frame-sdk";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";


function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
