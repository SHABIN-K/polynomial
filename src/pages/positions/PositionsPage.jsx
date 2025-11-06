import React from "react";
import { BriefcaseBusiness } from "lucide-react";

import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import PositionCard from "./components/positionCard";
import EmptyMessage from "@/components/EmptyMessage";

import { dummyPositions } from "@/constants";
import { polynomialClient } from "@/lib/polynomialfi";
import AppLoader from "@/components/AppLoader";
import { useQuery } from "@tanstack/react-query";
import { normalizePositionData } from "@/utils/normalizePositionData";

const PositionsPage = () => {
  const { data: positions = [], isLoading, isError, error } = useQuery({
    queryKey: ["positions"],
    queryFn: async () => {
      const result = await polynomialClient.accounts.getPositions();
      console.log(result)
      return (result || []).map(normalizePositionData);
    },
    staleTime: 60 * 1000,
  });

  // const dummyPositiodns = {
  //   "orderType": "DelayedOffchain",
  //   "accountId": "170141183460469231731687303715884108007",
  //   "chainId": 8008,
  //   "marketId": "2000",
  //   "size": "51088555388265424",
  //   "totalRealisedFundingUsd": "254341654290967602",
  //   "totalRealisedPnlUsd": "-79009032330855480747",
  //   "unrealisedFundingUsd": "-239498641105423737",
  //   "totalVolumeUsd": "26378374360261323925593",
  //   "avgEntryPrice": "103498758611820778480448",
  //   "latestInteractionPrice": "102882667123790192702925",
  //   "liquidationPrice": "87809817682220860000000",
  //   "entryTimestamp": 1762383423,
  //   "breakEvenPriceIncludingClosingFee": "105050446275076008529172",
  //   "breakEvenPriceExcludingClosingFee": "105048072627060321743777",
  //   "totalRealisedInterestUsd": "-1576490061020666780",
  //   "unrealisedInterestUsd": "-409241458278958780",
  //   "tpsl": null
  // }


  // const positiones = normalizePositionData(dummyPositiodns)

  // console.log(positiones)

  // ---- Render states ----
  if (isLoading) return <AppLoader />;

  if (isError)
    return (
      <div className="text-center text-gray-400 py-20">
        <p>⚠️ Failed to load positions</p>
        <p className="text-xs mt-1">{error?.message || "Unknown error"}</p>
      </div>
    );

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
        {dummyPositions.length === 0 ? (
          <EmptyMessage subtitle="You don't have any active positions" />
        ) : (
          dummyPositions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))
        )}
      </section>

      <BottomNavbar />
    </main>
  )
};

export default PositionsPage;
