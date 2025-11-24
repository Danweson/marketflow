import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketflow - Home",
  description: "Bienvenue sur Marketflow, votre destination ultime pour des achats en ligne exceptionnels. Découvrez une vaste sélection de produits de qualité, des offres exclusives et une expérience utilisateur fluide. Commencez votre aventure shopping dès aujourd'hui !",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
