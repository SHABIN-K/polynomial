
const QueryErrorMessage = ({ title = "Failed to load data", error }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400 text-center">
            <p className="text-sm">⚠️ {title}</p>
            <p className="text-xs mt-1">{error?.message || "Unknown error"}</p>
        </div>
    );
};

export default QueryErrorMessage;
