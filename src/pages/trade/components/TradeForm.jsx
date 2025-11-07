import clsx from 'clsx';
import { toast } from 'sonner';
import React, { useState } from 'react'
import { parseUnits } from 'polynomialfi';

import { getPolynomialClient } from '@/lib/polynomialfi';

const InfoRow = ({ label, leftText }) => {
    return (
        <div className="flex items-center justify-between text-sm text-gray-300">
            <span className="text-gray-600 font-medium">{label}</span>
            <span className="text-gray-500 font-semibold">{leftText}</span>
        </div>
    );
};

const TradeForm = ({ orderSide, marketSymbol, market, position }) => {
    const [amount, setAmount] = useState("");
    const [percentage, setPercentage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        const promise = (async () => {
            const client = await getPolynomialClient();

            const usdAmount = parseFloat(amount);
            if (!usdAmount || usdAmount <= 0) throw new Error("Enter valid amount");

            // ✅ convert USD → token size
            const sizeInToken = usdAmount / market.price;
            const sizeDelta = parseUnits(sizeInToken.toString()).toString();

            // ✅ feasibility check
            const preview = await client.getPostTradeDetails(
                market.id,
                sizeDelta,
                orderSide === "buy"
            );

            if (!preview.isFeasible) {
                console.error("Trade not feasible:", preview.errorMsg || preview);
                throw new Error(preview.errorMsg || "Trade not feasible — check margin or size.");
            }

            // ✅ decide function based on side
            const tx =
                orderSide === "buy"
                    ? await client.orders.createLongOrder(
                        market.id,
                        parseUnits(sizeInToken.toString()),
                        parseUnits((market.price * 1.01).toString())
                    )
                    : await client.orders.createShortOrder(
                        market.id,
                        parseUnits(sizeInToken.toString()),
                        parseUnits((market.price * 0.99).toString())
                    );

            // reset form
            setAmount("");
            setPercentage(null);
            return tx;
        })();

        toast.promise(promise, {
            loading: `${orderSide === "buy" ? "Buying" : "Selling"}...`,
            success: `${orderSide.toUpperCase()} order placed for ${amount} ${marketSymbol}`,
            error: (err) => err.message || "Order failed ❌",
        });

        setIsSubmitting(false);
    };

    const handleSelect = (value) => {
        if (orderSide !== "sell") return;
        const positionSize = Math.abs(Number(position?.size || 0) / 1e18);
        const currentValue = positionSize * market.price;  // total USD value of holding
        setPercentage(value);
        setAmount(((currentValue * value) / 100));
    };

    const handleChange = (e) => {
        setPercentage(null);
        setAmount(e.target.value)
    };


    return (
        <section className="flex flex-col justify-between h-full px-2 pt-4">

            <div className="flex flex-col gap-y-3 mb-2">
                <div className="flex gap-2 items-center border-2 py-[2px] px-1 rounded-md bg-white border-gray-600 shadow-md">
                    <label className="text-sm font-bold tracking-wider text-gray-700">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleChange}
                        placeholder="0"
                        className="w-full px-3 py-2 border text-gray-800 font-bold bg-slate-50 border-gray-300 focus:outline-none"
                    />
                </div>
                {orderSide === "sell" && <div className="grid grid-cols-4 gap-2">
                    {[25, 50, 75, 100].map((val) => (
                        <button
                            key={val}
                            onClick={() => handleSelect(val)}
                            className={clsx("py-2 rounded-md text-sm font-medium transition bg-white border-2 border-gray-700 text-gray-700 duration-150 shadow-md",
                                percentage === val && "outline outline-2 outline-red-600 ring-1 ring-red-300"
                            )}
                        >
                            {val}%
                        </button>
                    ))}
                </div>}
            </div>

            <div className="space-y-10 bg-white py-2 px-2 rounded-md border-2 border-gray-700 shadow-md">
                <div className="flex flex-col gap-y-1">
                    <InfoRow label="Liquidation Price" leftText="$87,804.7" />
                    <InfoRow label="Order Size" leftText={`$${amount}`} />
                    <InfoRow label="Slippage" leftText="Est: 0%" />
                    <InfoRow label="Fees" leftText="0% Fee" />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={clsx("w-full py-2 text-white font-bold rounded border-2 border-gray-700 shadow-lg",
                        orderSide === "buy" ? "bg-green-500" : "bg-red-500"
                    )}
                >
                    {orderSide === "buy" ? `Buy $${marketSymbol}${amount && `for ${amount}`}` : `Sell $${marketSymbol} ${amount && `for ${amount}`}`}
                </button>
            </div>

        </section>
    )
}

export default TradeForm