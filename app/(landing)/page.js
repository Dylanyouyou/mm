import React from "react";
import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Exchanges from "./_components/Exchanges";
import Tokenomics from "./_components/Tokenomics";
import HowToBuy from "./_components/HowToBuy";
import Footer from "./_components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header>
        <Nav />
      </Header>
      
      <Hero />
      
      <div className="bg-gray-200">
        <About />
        <Exchanges />
        <Tokenomics />
        <HowToBuy />
        <Footer />
      </div>
    </main>
  );
}
