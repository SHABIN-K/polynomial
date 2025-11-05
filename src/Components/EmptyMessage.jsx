import React from 'react'

const EmptyMessage = ({ title = "No assets found", subtitle }) => (
    <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
        <p className="text-base font-medium">{title}</p>
        {subtitle && (
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        )}
    </div>
);

export default EmptyMessage;