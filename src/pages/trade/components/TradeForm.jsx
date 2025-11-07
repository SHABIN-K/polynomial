import clsx from 'clsx';
import React, { useState } from 'react'

const InfoRow = ({ label, leftText }) => {
    return (
        <div className="flex items-center justify-between text-sm text-gray-300">
            <span className="text-gray-600 font-medium">{label}</span>
            <span className="text-gray-500 font-semibold">{leftText}</span>
        </div>
    );
};

const TradeForm = ({ orderSide }) => {
    const [amount, setAmount] = useState("");
    const [percentage, setPercentage] = useState(null); 

    const handleSelect = (value) => {
        setPercentage(value);
        // Example: auto-calc amount (you can connect to wallet balance later)
        const balance = 1000; // mock balance
        setAmount(((balance * value) / 100).toFixed(2));
    };
    return (
        <section className="flex flex-col justify-between h-full px-2 pt-4">

            <div className="flex flex-col gap-y-3 mb-2">
                <div className="flex gap-2 items-center border-2 py-[2px] px-1 rounded-md bg-white border-gray-600 shadow-md">
                    <label className="text-sm font-bold tracking-wider text-gray-700">Amount</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="w-full px-3 py-2 border bg-slate-50 border-gray-300 focus:outline-none"
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
                    <InfoRow label="Order Size" leftText="$5,156.23" />
                    <InfoRow label="Slippage" leftText="Est: 0%" />
                    <InfoRow label="Fees" leftText="0% Fee" />
                </div>
                <button
                    className={clsx("w-full py-2 text-gray-700 font-semibold rounded border border-gray-700 shadow-md")}
                >
                    {orderSide === "buy" ? "Buy PUPI for 0" : "Sell PUPI for 0"}
                </button>
            </div>

        </section>
    )
}

export default TradeForm
