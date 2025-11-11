import { parseUnits } from "polynomialfi";

/* 
 returns price with 1% slippage added or subtracted based on side
*/
export const getSlippagePrice = (price, side) => {
    const multiplier = side === "buy" ? 1.01 : 0.99;
    return parseUnits((price * multiplier).toString());
};

/*
converts USD amount to token size using market price
*/
export const getSizeUnits = (usdAmount, price) => {
    const sizeInToken = usdAmount / price;
    return parseUnits(sizeInToken.toString());
};


export function calcLiquidationPrice(
    entryPrice,
    leverage = 1,
    takerFeeRatio,
    isLong,
    maintenanceMarginRate = 0.005
) {
    if (!entryPrice || !leverage) return 0;

    if (isLong) {
        return (
            (entryPrice * (1 - takerFeeRatio)) /
            (1 + 1 / leverage - maintenanceMarginRate)
        );
    } else {
        return (
            (entryPrice * (1 + takerFeeRatio)) /
            (1 - 1 / leverage + maintenanceMarginRate)
        );
    }
}
