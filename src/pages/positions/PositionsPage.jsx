import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BriefcaseBusiness } from "lucide-react";

import TopNavbar from "@/components/TopNavbar";
import AppLoader from "@/components/AppLoader";
import BottomNavbar from "@/components/BottomNavbar";
import PositionCard from "./components/positionCard";
import EmptyMessage from "@/components/EmptyMessage";
import QueryErrorMessage from "@/components/QueryErrorMessage";

import { getPolynomialClient } from "@/lib/polynomialfi";
import { normalizePositionData } from "@/utils/normalizePositionData";

const PositionsPage = () => {
  const { data: positions = [], isLoading, isError, error } = useQuery({
    queryKey: ["positions"],
    queryFn: async () => {
      const client = await getPolynomialClient();
      const result = await client.accounts.getPositions();
      return (result || []).map(normalizePositionData);
    },
    staleTime: 60 * 1000,
  });


  // ---- Render states ----
  if (isLoading) return <AppLoader />;
  if (isError) return <QueryErrorMessage title="Failed to load positions" error={error} />;

  return (
    <main className="py-16">
      <TopNavbar />

      <header className="flex flex-row items-center px-4 py-4 space-x-2 border-b border-gray-300">
        <BriefcaseBusiness className="w-6 h-6 text-blue-500" />
        <p className="text-lg font-semibold text-gray-800">
          Active Positions
        </p>
      </header>

      <section className="flex flex-col mx-auto space-y-2">
        {positions.length === 0 ? (
          <EmptyMessage subtitle="You don't have any active positions" />
        ) : (
          positions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))
        )}
      </section>

      <BottomNavbar />
    </main>
  )
};

export default PositionsPage;
