import React from "react";
import { Metadata } from "next";
import WholeSalersList from "@/components/Wholesalers/WholeSalersList";

export const metadata: Metadata = {
  title: "MarketFlow - Agents",
  description: "MarketFlow est une plateforme e-commerce moderne et conviviale.",
  // other metadata
};

const WholeSalersPage = () => {
  return (
    <main>
      <WholeSalersList />
    </main>
  );
};

export default WholeSalersPage;
