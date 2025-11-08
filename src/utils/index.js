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