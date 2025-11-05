import { BellDot, Star } from "lucide-react"
import useWatchlistStore from "@/store/useWatchlistStore";

const MarketTopNavbar = () => {
    const { setShowWatchlistOnly, showWatchlistOnly } = useWatchlistStore();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#f3f3f3] border-b border-gray-300 shadow-sm z-50">
            <div className="flex items-center justify-between h-16 max-w-screen-sm mx-auto px-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img
                        src="https://polynomial.fi/header/fx-logo.svg"
                        alt="Polynomial FX Logo"
                        className="w-full h-full object-contain object-center"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <div onClick={() => setShowWatchlistOnly()} className="p-2 rounded-lg hover:bg-gray-100">
                        <Star
                            className="w-6 h-6"
                            color={showWatchlistOnly ? "#facc15" : "#4b5563"}
                            fill={showWatchlistOnly ? "#facc15" : "none"} />
                    </div>
                    <div className="p-2 rounded-lg hover:bg-gray-100">
                        <BellDot className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MarketTopNavbar