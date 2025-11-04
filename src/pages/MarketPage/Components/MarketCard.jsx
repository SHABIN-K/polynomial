import React from 'react'
import clsx from 'clsx'

const MarketCard = ({ asset }) => {
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

                <div className="flex flex-row">
                    <div className={clsx("w-36 h-12 flex-shrink-0", getTrendColor(asset.change))}>{getMiniChart(asset.trend)}</div>
                    <div className='flex flex-col items-end justify-center'>
                        <h3 className="font-bold text-gray-900 text-base">{asset.price}</h3>
                        <span className="text-gray-500 text-sm font-semibold">{asset.amount}</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-20 right-4 h-[2.8px] bg-[#eeeeee]" />
        </div>
    )
}

export default MarketCard