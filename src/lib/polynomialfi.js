import PolynomialSDK from "polynomialfi";

export const sdk = await PolynomialSDK.create({
    apiKey: "your-api-key",
    sessionKey: "0x1234...",
    walletAddress: "0x742d35...",
});