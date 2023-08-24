import Category from "@/components/categories/Category";
import Deals from "@/components/deals/Deals";
import Food from "@/components/food/Food";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const message = () =>
    toast(
      "Site web créé uniquement à des fins de présentation - certains éléments peuvent ne pas fonctionner.\n\nCe service n'existe pas et n'a aucune affiliation avec des services similaires.",
      {
        duration: 10000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      }
    );

  useEffect(() => {
    setTimeout(() => {
      message();
    }, 2000);
  }, []);
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Deals />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
