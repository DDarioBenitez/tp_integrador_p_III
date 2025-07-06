import React from "react";

const StatsCard = ({ title, count, color, icon, onClick }) => {
    const colors = {
        blue: "border-blue-500 text-blue-500 bg-blue-100",
        green: "border-green-500 text-green-500 bg-green-100",
    };

    return (
        <div
            onClick={onClick}
            className={`flex items-center p-4 border-l-4 rounded-lg shadow cursor-pointer hover:shadow-md ${colors[color]} transition`}
        >
            <div className="p-2 rounded-full bg-white">{icon}</div>
            <div className="ml-3">
                <p className="text-sm text-gray-600">{title}</p>
                <p className="text-xl font-bold text-gray-800">{count}</p>
            </div>
        </div>
    );
};

export default StatsCard;
