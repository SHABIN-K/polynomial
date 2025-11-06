import React from "react";
import { BriefcaseBusiness } from "lucide-react";

import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import PositionCard from "./components/positionCard";
import EmptyMessage from "@/components/EmptyMessage";

import { dummyPositions } from "@/constants";

const PositionsPage = () => {
  return (
    <div className="py-16">
      <TopNavbar />
      <div className="flex flex-row items-center px-4 py-4 space-x-2 border-b border-gray-300">
        <BriefcaseBusiness className="w-6 h-6 text-blue-500" />
        <p className="text-lg font-semibold text-gray-800">Active Positions</p>
      </div>
      <div className="flex flex-col mx-auto space-y-2">
        {dummyPositions.length === 0 ? (
          <EmptyMessage subtitle="You don't have any active positions" />
        ) : (
          dummyPositions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))
        )}
      </div>
      <BottomNavbar />
    </div>
  )
};

export default PositionsPage;
