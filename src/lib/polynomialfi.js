import PolynomialSDK from "polynomialfi";

export const polynomialClient = await PolynomialSDK.create({
    apiKey: "0x9069FcA5111424bc8F87CeAe8bff30Fb0f90cD6d",
    sessionKey: "0xf64b7b93f8127f7764073f870a07f4d97102ccde733b6e6f20202ebc299c0465",
    // sessionKey: "0x93f120cea4c68a2d9c623967cefcb900c80ca756da6629bb8dfa1cef4188dd03", // private
    walletAddress: "0x4365Bd25Da6233EA5680b26F0Abc8f1f28e98ECc",
});

