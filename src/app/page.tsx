import React from "react";
import "./globals.css";
import Consultoria from "./components/Consultoria";
import Hero from "./components/Hero";
import Etapas from "./components/Etapas";
import Destinos from "./components/Destinos";
import Pacotes from "./components/Pacotes";
import Duvida from "./components/Duvida";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Consultoria />
      <Etapas />
      <Destinos />
      <Pacotes />
      <Duvida />
      <Footer />

    </div>
  );
}