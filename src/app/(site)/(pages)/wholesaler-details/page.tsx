import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import WholesalerDetails from "@/components/Wholesalers/WholeSalerDetails";

export const metadata: Metadata = {
  title: "MarketFlow - Détails de l'Agent",
  description: "MarketFlow est une plateforme e-commerce moderne et conviviale.",
  // other metadata
};

const WholesalerDetailsPage = () => {
  return (
    <main>
      <WholesalerDetails />
    </main>
  );
};

export default WholesalerDetailsPage;
