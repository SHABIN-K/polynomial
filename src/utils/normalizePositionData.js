import marketMeta from "@/constants/metadata/data.json";

/**
 * Takes raw posttion data from Polynomial SDK and converts it into a
 * clean UI-friendly format
 */

export const normalizePositionData = (p) => {
    const rawSize = BigInt(p.size)
    const rawAvgPrice = BigInt(p.avgEntryPrice)
    const rawMarkPrice = BigInt(p.latestInteractionPrice)
    const totalVolumeUsd = Number(BigInt(p.totalVolumeUsd)) / 1e18;

    const ONE_E36 = 10n ** 36n;
    const pnlUsdBig = ((rawMarkPrice - rawAvgPrice) * rawSize) / ONE_E36;
    const pnlUsd = Number(pnlUsdBig);

    const pnlPercent = totalVolumeUsd !== 0 ? (pnlUsd / totalVolumeUsd) * 100 : 0;

    // Lookup market metadata using marketId from position.
    const meta = marketMeta.find(m => m.marketId === p.marketId);

    return {
        id: p.marketId,
        symbol: meta?.symbol || "UNKNOWN",
        investedAmountUsd: totalVolumeUsd,
        markPrice: Number(rawMarkPrice) / 1e18,
        avgPrice: Number(rawAvgPrice) / 1e18,
        pnlUsd: pnlUsd ? `$${pnlUsd}` : "-",
        pnlPercent,
    }
}