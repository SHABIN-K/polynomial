import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";
import { ChartCandlestick, SendToBack, WalletMinimal, ChartLine } from "lucide-react"

const MarketBottomNavbar = () => {
    const location = useLocation();

    const navItems = [
        { id: "markets", label: "Markets", icon: ChartCandlestick, path: "/" },
        { id: "positions", label: "Positions", icon: SendToBack, path: "/positions" },
        { id: "multi-charts", label: "Multi Charts", icon: ChartLine, path: null },
        { id: "profile", label: "Profile", icon: WalletMinimal, path: null },
    ]

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#f3f3f3] border-t border-gray-300 z-50">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto">
                {navItems.map(({ id, label, icon: Icon, path }) => {
                    const active = path && (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path));

                    return path ? (
                        <Link
                            key={id}
                            to={path}
                            className={clsx(
                                "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                                active ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                            )}
                            title={label}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs font-medium">{label}</span>
                        </Link>
                    ) : (
                        <button
                            key={id}
                            className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-gray-400 hover:text-gray-600"
                            title={label}
                            disabled
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs font-medium">{label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    )
};

export default MarketBottomNavbar;
