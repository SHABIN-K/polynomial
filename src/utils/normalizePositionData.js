import marketMeta from "@/constants/metadata/data.json";

export const normalizePositionData = (p) => {
    const size = BigInt(p.size)
    const avgPrice = BigInt(p.avgEntryPrice)
    const markPrice = BigInt(p.latestInteractionPrice)

    const scale = 10n ** 36n

    const investedUsdBig = (size * avgPrice) / scale
    const pnlUsdBig = (size * (markPrice - avgPrice)) / scale

    const investedUsd = Number(investedUsdBig)
    const pnlUsd = Number(pnlUsdBig)
    const pnlPercent = investedUsd !== 0 ? (pnlUsd / investedUsd) * 100 : 0

    const meta = marketMeta.find(m => m.marketId === p.marketId)
    const symbol = meta?.symbol || "UNKNOWN"

    return {
        id: p.marketId,
        symbol,
        investedAmountUsd: investedUsd,
        markPrice: Number(markPrice) / 1e18,
        avgPrice: Number(avgPrice) / 1e18,
        pnlUsd,
        pnlPercent,
    }
}