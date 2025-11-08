# 🌐 Polynomial.fi Farcaster Mini-App

A lightweight **Farcaster Mini-App** built for **Polynomial.fi**, enabling users to **market data, pricing, open positions**, and perform quick trading actions directly inside Farcaster.

This is a customized private application, designed for personal use and linked to a specific **wallet address via environment configuration**.

## Key Features ✨

- **Market Data View**: Displays live market prices and asset information.
- **Open Positions**: SShows open positions tied to your configured wallet.
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

### 1. Clone the Repository

```bash
# Clone this repository
  $git clone https://github.com/SHABIN-K/polynomial.git

# Go into the repository
  $cd polynomial
```

### 2. Configure Environment Variable

Create a .env file in the project root with the following keys

```bash
VITE_POLYNOMIAL_API_KEY=
VITE_POLYNOMIAL_SESSION_KEY=
VITE_POLYNOMIAL_WALLET_ADDRESS=
```

You can find details on how to generate and fill these values in the official [Polynomial SDK Quick Start Guide](https://github.com/Polynomial-Protocol/polynomial-npm?tab=readme-ov-file#quick-start)

### 3. Install Dependencies & Run the App

```bash
yarn install
yarn dev
```

The app will be available at http://localhost:5173

---