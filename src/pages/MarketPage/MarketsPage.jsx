import { TrendingUp, TrendingDown } from "lucide-react"

const MarketsPage = () => {
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

  const getTrendColor = (change) => {
    return change >= 0 ? "text-green-500" : "text-red-500"
  }

  const getMiniChart = (trend) => {
    const points = trend.map((v, i) => `${i * 15},${100 - v}`).join(" ")
    return (
      <svg width="60" height="30" viewBox="0 0 90 100" className="w-full h-full">
        <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }

  return (
    <div className="bg-black text-white pt-1">
      <div className=""></div>
      <div className="space-y-3">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-white rounded-lg p-4 border border-gray-100 flex items-center gap-4">
            {/* Icon Circle */}
            <div className={`${asset.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className="text-sm font-bold text-gray-700">{asset.symbol[0]}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{asset.symbol}</h3>
                <span className="text-gray-900 font-semibold text-sm">{asset.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs flex items-center gap-1 ${getTrendColor(asset.change)}`}>
                  {asset.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {asset.change >= 0 ? "+" : ""}
                  {asset.change}%
                </span>
                <span className="text-gray-500 text-xs">{asset.amount}</span>
              </div>
            </div>

            {/* Mini Chart */}
            <div className={`w-16 h-8 flex-shrink-0 ${getTrendColor(asset.change)}`}>{getMiniChart(asset.trend)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketsPage;