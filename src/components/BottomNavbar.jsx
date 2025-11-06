import { clsx } from "clsx";
import { Link, useLocation } from "react-router-dom";
import { ChartCandlestick, SendToBack, WalletMinimal, ChartLine } from "lucide-react"

const BottomNavbar = () => {
    const location = useLocation();

    const navItems = [
        { id: "markets", label: "Markets", icon: ChartCandlestick, path: "/", isDisabled: false },
        { id: "positions", label: "Positions", icon: SendToBack, path: "/positions", isDisabled: false },
        { id: "multi-charts", label: "Multi Charts", icon: ChartLine, path: null, isDisabled: true },
        { id: "profile", label: "Profile", icon: WalletMinimal, path: null, isDisabled: true },
    ]
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#f3f3f3] border-t border-gray-300 z-50">
            <div className="flex items-center justify-around h-16 max-w-md mx-auto">
                {navItems.map(({ id, label, icon: Icon, path, isDisabled }) => {
                    const active = path && (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path));
                    return (
                        <Link
                            key={id}
                            to={isDisabled ? "#" : path}
                            onClick={(e) => isDisabled && e.preventDefault()}
                            className={clsx(
                                "flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors",
                                active ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                            )}
                            title={label}
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs font-medium">{label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
};

export default BottomNavbar;