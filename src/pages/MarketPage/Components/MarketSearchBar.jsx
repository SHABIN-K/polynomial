import React from 'react'
import { Star } from 'lucide-react';
import useWatchlistStore from '@/store/useWatchlistStore';

const MarketSearchBar = ({ query, setQuery }) => {
    const { showWatchlistOnly } = useWatchlistStore();
    return (
        <>
            {showWatchlistOnly ? (
                <div className="flex flex-row items-center px-4 py-2 space-x-2 border-b border-gray-300">
                    <Star className="w-8 h-8 fill-[#facc15]" />
                    <p className="text-lg font-semibold text-gray-800">Watchlist</p>
                </div>
            ) : (
                <div className="flex items-center bg-white rounded-full border border-gray-200 p-4 mt-2 mx-2 shadow-md">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Market"
                        className="w-full bg-transparent outline-none font-medium text-base text-gray-800 placeholder-gray-700"
                    />
                </div >
            )}
        </>
    )
}

export default MarketSearchBar