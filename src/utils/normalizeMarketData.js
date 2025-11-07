/**
 * Takes raw market data from Polynomial SDK and converts it into a
 * clean UI-friendly format
 */


export const normalizeMarketData = (market) => {
    const price = Number(market.price) || 0;
    const price24HrAgo = Number(market.price24HrAgo) || 0;
    const change = price24HrAgo > 0 ? ((price - price24HrAgo) / price24HrAgo) * 100 : 0;

    return {
        id: market.marketId,
        symbol: market.symbol,
        price: `$${price.toFixed(2)}`,
        change: change.toFixed(2),
        volume: `$${Number(market.tradesVolume24h || 0).toFixed(2)}`,
        trend: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
    };
};

export const normalizeSingleMarketData = (market) => {
    const price = Number(market.price) || 0;
    const price24HrAgo = Number(market.price24HrAgo) || 0;
    const change = price24HrAgo > 0 ? ((price - price24HrAgo) / price24HrAgo) * 100 : 0;

    return {
        id: market.marketId,
        symbol: market.symbol,
        price: price,
        change: change
    };
};
