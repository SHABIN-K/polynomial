import PolynomialSDK from "polynomialfi";

let clientPromise = null;

export function getPolynomialClient() {
    if (!clientPromise) {
        clientPromise = PolynomialSDK.create({
            apiKey: import.meta.env.VITE_POLYNOMIAL_API_KEY,
            sessionKey: import.meta.env.VITE_POLYNOMIAL_SESSION_KEY,
            walletAddress: import.meta.env.VITE_POLYNOMIAL_WALLET_ADDRESS,
        });
    }
    return clientPromise;
}

// read more :https://github.com/Polynomial-Protocol/polynomial-npm?tab=readme-ov-file#quick-start