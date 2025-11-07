import React from 'react'


const InfoRow = ({ label, leftText }) => {
    return (
        <div className="flex items-center justify-between text-sm text-gray-300">
            <span className="text-gray-400">{label}</span>
            <span className="text-gray-400">{leftText}</span>
        </div>
    );
};


const TradeForm = () => {
    return (
        <section className="flex flex-col justify-between h-full bg-white px-2 pt-4">

            <div className="flex gap-2 items-center border py-[2px] px-1 rounded-md">
                <label className="text-sm font-bold tracking-wider text-gray-700">Amount</label>
                <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>

            <div className="space-y-10">
                <div className="flex flex-col gap-y-1.5">
                    <InfoRow label="Liquidation Price" leftText="$87,804.7" />
                    <InfoRow label="Order Size" leftText="$5,156.23" />
                    <InfoRow label="Slippage" leftText="Est: 0%" />
                    <InfoRow label="Fees" leftText="0% Fee" />
                </div>
                <button
                    className="w-full py-2 text-white bg-gray-400 rounded"
                >
                    Buy PUPI for 0
                </button>
            </div>

        </section>
    )
}

export default TradeForm
