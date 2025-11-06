import React from 'react'

const TradeForm = () => {
    return (
        <div className="space-y-4 p-4 bg-white rounded-md border border-gray-300">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                disabled
                className="w-full py-2 text-white bg-gray-400 rounded cursor-not-allowed"
            >
                Buy PUPI for 0
            </button>
        </div>
    )
}

export default TradeForm

// 0x9069FcA5111424bc8F87CeAe8bff30Fb0f90cD6d
// 0x93f120cea4c68a2d9c623967cefcb900c80ca756da6629bb8dfa1cef4188dd03
// 0x4365Bd25Da6233EA5680b26F0Abc8f1f28e98ECc