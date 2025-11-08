# 🌐 Polynomial.fi Farcaster Mini-App

A lightweight **Farcaster Mini-App** built for **Polynomial.fi**, enabling users to **market data, pricing, open positions**, and perform quick trading actions directly inside Farcaster.

This is a customized private application, designed for personal use and linked to a specific **wallet address via environment configuration**.

## Key Features ✨

- **Market Data View**: Displays live market prices and asset information.
- **Open Positions**: Shows open positions tied to your configured wallet.
- **Quick Trading Actions**: Allows instant trade execution directly through your connected wallet session.
- **Customized Application**: Built specifically for private use, restricted to a single wallet setup.

## Technologies Used 🛠️

- **React + Vite + js** — Fast and modern frontend setup
- **Zustand** — Lightweight state management
- **Tailwind CSS** — Utility-first styling framework for clean UI
- **React Query** — Data fetching and caching layer
- **Polynomial SDK** — Market, pricing, and position data integration
- **Farcaster Mini-App Integration** — Optimized frame-based user experience

---

## 🏃 Getting Started

```bash
# 1. Clone the Repository
  $git clone https://github.com/SHABIN-K/polynomial.git

# Go into the repository
  $cd polynomial

# 2. Configure Environment Variable

Create a .env file in the project root with the following keys

VITE_POLYNOMIAL_API_KEY=
VITE_POLYNOMIAL_SESSION_KEY=
VITE_POLYNOMIAL_WALLET_ADDRESS=

# 3. Install Dependencies & Run the App

yarn install
yarn dev

The app will be available at http://localhost:5173
```

You can find details on how to generate and fill these values in the official [Polynomial SDK Quick Start Guide](https://github.com/Polynomial-Protocol/polynomial-npm?tab=readme-ov-file#quick-start)

## 🧩 Brief Architecture Notes

- The app follows a **modular structure** separating UI, logic, and data layers.
- The app is divided into three main pages: **Markets**, **Trade**, and **Positions**.
- **Markets Page** lists all available markets and includes a **watchlist** feature, allowing users to save tokens.
- **Trade Page** lets users buy or sell selected market items.
- **Positions Page** displays all active positions for the connected wallet.
- Data is fetched with **React Query** through the SDK, then normalized before being shown in the UI.
- **Zustand** manages global state and local storage for features like the watchlist.
- **Sonner** library handles toast notifications for errors and actions.
- The data flow is simple: **SDK → normalize → state/hooks → components → UI**.

### ⚙️ Trading Logic Example

```javascript
import { PolynomialSDK, parseUnits } from "polynomialfi";

// Get market data
const ethMarket = await sdk.markets.getMarketBySymbol("ETH");

// Create a long  market order (executes immediately)
const longOrder = await sdk.orders.createLongOrder(
  ethMarket?.marketId,
  parseUnits("0.1")
);

// Create a short market order (executes immediately)
const shortOrder = await sdk.orders.createShortOrder(
  ethMarket?.marketId,
  parseUnits("0.1")
);
```

- The trade logic first checks if a trade is feasible using the SDK’s validation method.
  Only after confirming feasibility does it execute the long or short order.
  This approach ensures that every trade runs under valid conditions and prevents failed or invalid transactions.

## ⚖️ Trade-offs & Design Decisions

- Created a token metadata dataset to store all token details globally.  
  Since the SDK doesn’t provide complete token information, this dataset acts as a reference source for missing data.  
  It helps quickly identify tokens by their market ID, making it easier to match and display accurate token names and symbols across pages.  
  This also avoids repeated network requests for token details and improves overall performance.

- Used **React Query** for data fetching and caching since it automatically handles state, refetching, and data validation.  
   This means we don’t need to manually manage data handling logic, making the setup simpler and more reliable.

### 🧪 Mock Data Note

**position data** is mocked to show how the Positions page works.  
Real positions only appear after actual trades, but since no real wallet or funds are used here,  
mock data (`positionMock`) is shown instead when the SDK returns no results.
