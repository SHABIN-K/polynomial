import clsx from "clsx";
import { Bell, CircleArrowDown, CircleArrowUp, Star } from "lucide-react";

import useWatchlistStore from "@/store/useWatchlistStore";

const TradeActions = ({ marketSymbol, orderSide, setOrderSide }) => {
    const { watchlist, setWatchListAssetsId } = useWatchlistStore();
    const isWatched = watchlist.includes(marketSymbol.toLowerCase());

    return (
        <div className="absolute bottom-0 left-0 w-full">
            <div className="px-2 py-3 space-y-2">

                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setWatchListAssetsId(marketSymbol.toLowerCase())} className="py-2 bg-white text-gray-700 rounded-lg font-medium flex items-center justify-center gap-1  border border-gray-400">
                        <Star
                            className="w-5 h-5"
                            color={isWatched ? "#facc15" : "#4b5563"}
                            fill={isWatched ? "#facc15" : "none"}
                        />
                        Watchlist
                    </button>
                    <button disabled className="py-2 bg-white text-gray-700 rounded-lg font-medium flex items-center justify-center gap-1  border border-gray-400">
                        <Bell className="w-5 h-5" />
                        Alerts
                    </button>
                </div>

                <div className="grid grid-cols-2">
                    <button
                        onClick={() => setOrderSide("buy")}
                        className={clsx("py-2 rounded-l-lg font-bold flex items-center justify-center gap-1 border border-gray-400",
                            orderSide === "buy"
                                ? "bg-[#717e2c] text-white"
                                : "bg-white text-gray-700"
                        )}>
                        <CircleArrowUp className="w-5 h-5 text-gray-700" fill="#c6e51b" />
                        Buy
                    </button>
                    <button
                        onClick={() => setOrderSide("sell")}
                        className={clsx("py-2 rounded-r-lg font-bold flex items-center justify-center gap-1 border border-gray-400",
                            orderSide === "sell"
                                ? "bg-[#6c2626] text-white"
                                : "bg-white text-gray-700"
                        )}>
                        <CircleArrowDown className="w-5 h-5 text-gray-700" fill="#fa5a52" />
                        Sell
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TradeActions;