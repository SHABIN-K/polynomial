import { clsx } from "clsx";
import { ChartCandlestick, SendToBack, WalletMinimal, ChartLine } from "lucide-react"

const MarketBottomNavbar = () => {
    const navItems = [
        { id: "markets", label: "Markets", icon: ChartCandlestick, path: "/" },
        { id: "orders", label: "Orders", icon: SendToBack, path: "/" },
        { id: "multi-charts", label: "Multi Charts", icon: ChartLine, path: "/" },
        { id: "profile", label: "Profile", icon: WalletMinimal, path: "/" },
    ]
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#f3f3f3] border-t border-gray-300">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto">
                {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        className={clsx("flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                            "markets" === id ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                        )}
                        title={label}
                    >
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-medium">{label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
};

export default MarketBottomNavbar;
