import { parseUnits } from "polynomialfi";

export const getSlippagePrice = (price, side) => {
    const multiplier = side === "buy" ? 1.01 : 0.99;
    return parseUnits((price * multiplier).toString());
};

export const getSizeUnits = (usdAmount, price) => {
    const sizeInToken = usdAmount / price;
    return parseUnits(sizeInToken.toString());;
};

