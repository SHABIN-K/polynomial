import clsx from 'clsx'
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const MarketCard = ({ asset }) => {
    const getTrendColor = (change) => {
        return change >= 0 ? "text-green-500" : "text-red-500"
    }

    return (
        <div className="relative flex flex-row items-center p-3 gap-x-3">
            <div className="flex items-center justify-center w-12 h-12">
                <img
                    src="https://polynomial.fi/markets/btc.svg"
                    alt="Token logo icon"
                    className="w-full h-full object-contain object-center"
                />
            </div>

            <div className="flex-1 flex flex-row justify-between">
                <div className="flex flex-col justify-center items-start">
                    <h3 className="font-bold text-gray-900 text-base">{asset.symbol}</h3>
                    <span className={clsx("text-sm font-medium", getTrendColor(asset.change))}>
                        {asset.change >= 0 ? "+" : ""}
                        {asset.change}%
                    </span>
                </div>

                <div className="flex items-center w-28 h-12 overflow-hidden">
                    <Sparklines data={asset.trend} width={100} height={30} margin={5}>
                        <SparklinesLine
                            style={{
                                strokeWidth: 2,
                                stroke: asset.change >= 0 ? "#22c55e" : "#ef4444",
                                fill: "none",
                            }}
                        />
                    </Sparklines>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <h3 className="font-bold text-gray-900 text-base">{asset.price}</h3>
                    <span className="text-gray-500 text-sm font-semibold">{asset.amount}</span>
                </div>
            </div>
            <div className="absolute bottom-0 left-20 right-4 h-[2.8px] bg-[#eeeeee]" />
        </div>
    )
}

export default MarketCard