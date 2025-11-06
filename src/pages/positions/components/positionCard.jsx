import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'


const Stat = ({ label, value, color, align = "start" }) => (
    <div className={clsx("flex flex-col text-sm", align === "end" && "items-end")}>
        <span className="text-[12px] font-bold text-gray-400 capitalize">{label}</span>
        <span className={clsx("font-medium", color)}>{value}</span>
    </div>
);


const PositionCard = ({ position }) => {
    const isProfit = position.pnl >= 0
    const pnlColor = isProfit ? "text-green-500" : "text-red-500"
    const iconSrc = `https://polynomial.fi/markets/${(position.symbol || '').toLowerCase()}.svg`

    return (
        <Link to={`/trade/${position.symbol}`}>
            <div className="relative rounded-md mx-2 bg-white text-gray-700 border border-[#1b2230] shadow-sm">

                <div className="flex items-center justify-between px-2 py-2 border-b border-gray-700">
                    <div className="flex items-center gap-1">
                        <div className="w-7 h-7 rounded-full">
                            <img
                                src={iconSrc}
                                alt={position.name || position.symbol}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-sm uppercase tracking-wide">
                            {position.symbol}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-xs text-gray-400 font-bold">
                            PnL{" "}
                            <span className={clsx("text-xs", pnlColor)}>
                                ${position.pnl}
                            </span>
                        </div>

                        <div className="px-3 py-1 rounded-md bg-[#19202d] text-gray-200 font-semibold text-xs">
                            Trade
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-2 p-2.5">
                    <Stat label="Invested" value={position.investedAmount} color="text-green-400" />
                    <Stat label="Sold" value={position.sold} />
                    <Stat label="Remaining" value={position.remaining} />
                    <Stat
                        label="PnL%"
                        value={position.pnlPercent+"%"}
                        color={position.pnlPercent >= 0 ? "text-green-400" : "text-red-400"}
                        align="end"
                    />
                </div>
            </div>
        </Link>
    )
}

export default PositionCard