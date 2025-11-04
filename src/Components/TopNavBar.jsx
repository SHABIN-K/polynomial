import { BellDot, Eye } from "lucide-react"

const TopNavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#f3f3f3] border-b border-gray-300 z-50">
            <div className="flex items-center justify-between h-16 max-w-md mx-auto px-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img
                        src="https://polynomial.fi/header/fx-logo.svg"
                        alt="Polynomial FX Logo"
                        className="w-full h-full object-contain object-center"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg hover:bg-gray-100" title="Wishlist">
                        <Eye className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="p-2 rounded-lg hover:bg-gray-100" title="Notifications">
                        <BellDot className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNavBar