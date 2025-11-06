import { useMemo } from "react"

export function useFilteredMarkets(markets, query, showWatchlistOnly, watchlist) {
    return useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()

        const visibleMarkets = showWatchlistOnly
            ? markets.filter((m) => watchlist.includes(m.id))
            : markets

        if (!normalizedQuery) return visibleMarkets

        return visibleMarkets.filter((m) => m.symbol.toLowerCase().includes(normalizedQuery))
    }, [markets, query, showWatchlistOnly, watchlist])
}

