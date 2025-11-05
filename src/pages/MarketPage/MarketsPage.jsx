import { useState } from "react";
import MarketCard from "./Components/MarketCard";
import MarketBottomNavbar from "./Components/MarketBottomNavbar";

const MarketsPage = () => {
  const [query, setQuery] = useState("");

  const assets = [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      price: "$29,850.1",
      change: 1.6,
      amount: "2.73 BTC",
      color: "bg-red-100",
      trend: [65, 72, 68, 75, 70, 80],
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      price: "$10,560.1",
      change: -0.86,
      amount: "47.62 ETH",
      color: "bg-blue-100",
      trend: [45, 48, 42, 50, 48, 52],
    },
    {
      id: "mnr",
      symbol: "MNR",
      name: "Monero",
      price: "$3,850.1",
      change: -2.1,
      amount: "3.82 MNR",
      color: "bg-yellow-100",
      trend: [55, 52, 50, 48, 45, 42],
    },
    {
      id: "btm",
      symbol: "BTM",
      name: "Bytom",
      price: "$5,850.1",
      change: -1.04,
      amount: "2602.73 BTM",
      color: "bg-blue-200",
      trend: [40, 42, 38, 45, 42, 48],
    },
    {
      id: "thr",
      symbol: "THR",
      name: "Thor",
      price: "$12,850.1",
      change: -4.1,
      amount: "22.73 THR",
      color: "bg-teal-100",
      trend: [60, 58, 55, 50, 48, 45],
    },
    {
      id: "xrp",
      symbol: "XRP",
      name: "Ripple",
      price: "$3,850.1",
      change: 0.26,
      amount: "4262.73 XRP",
      color: "bg-blue-100",
      trend: [50, 52, 48, 55, 52, 58],
    },
    {
      id: "zec",
      symbol: "ZEC",
      name: "Zcash",
      price: "$53,850.1",
      change: -1.6,
      amount: "22.73 ZEC",
      color: "bg-yellow-200",
      trend: [70, 68, 65, 62, 60, 55],
    },
    {
      id: "rpl",
      symbol: "RPL",
      name: "Ripple Labs",
      price: "$17,850.1",
      change: -0.86,
      amount: "42.73 RPL",
      color: "bg-blue-100",
      trend: [55, 52, 50, 48, 45, 42],
    },
  ]

  return (
    <>
      <div className="flex items-center bg-white rounded-full border border-gray-200 p-4 mt-2 mx-2 shadow-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Market"
          className="w-full bg-transparent outline-none font-medium text-base text-gray-800 placeholder-gray-700"
        />
      </div>

      <div className="flex flex-col mx-auto">
        {assets.map((asset) => (
          <MarketCard key={asset.id} asset={asset} />
        ))}
      </div>
      <MarketBottomNavbar />
    </>
  );
};

export default MarketsPage;