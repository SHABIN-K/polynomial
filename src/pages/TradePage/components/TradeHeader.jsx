import clsx from 'clsx';
import React from 'react'
import { ArrowBigLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TradeHeader = () => {
    const navigate = useNavigate();

    const price = 42000;
    return (
        <div className="flex justify-between items-center p-3 bg-[#f3f3f3] border-b border-gray-400">
            <div className="flex items-center gap-2">
                <ArrowBigLeft onClick={() => navigate("/")} className="text-gray-800" size={25} />
                <div className="w-12 h-12">
                    <img
                        src="https://polynomial.fi/markets/eth.svg"
                        alt="Token logo icon"
                        className="w-full h-full object-contain object-center"
                    />
                </div>
                <div className="text-xl font-bold text-gray-800">{"ETH/USD"}</div>
            </div>
            <div className="flex flex-row items-center gap-x-2">
                <div className="flex flex-col items-end">
                    <div className={clsx("text-lg font-bold text-gray-800",
                        price > 0 ? "text-green-600" : "text-red-600"
                    )}>${price}</div>
                    <div className="text-sm font-medium text-gray-700">+1.435%</div>
                </div>
            </div>
        </div>
    )
}

export default TradeHeader