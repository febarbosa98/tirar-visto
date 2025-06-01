"use client";
import { useState } from "react";
import Image from "next/image";

const packages = [
  {
    name: "Passaporte",
    price: "R$ 890,00",
    image: "/img/passaporte.svg",
    atendimento: "On-line",
    tempo: "45 dias",
    basic: true,
    premium: false,
  },
  {
    name: "Passaporte + Visto",
    price: "R$ 1.290,00",
    image: "/img/passaporte2.svg",
    atendimento: "On-line + Presencial",
    tempo: "25 dias",
    basic: true,
    premium: false,
  },
  {
    name: "Consultoria Completa",
    price: "R$ 1.890,00",
    image: "/img/passaporte3.svg",
    atendimento: "Presencial Completo",
    tempo: "10 dias",
    basic: true,
    premium: false,
  },
];

export default function Pacotes() {
  const [current, setCurrent] = useState(0);

  // Navegação dos cards
  const prevCard = () => setCurrent((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  const nextCard = () => setCurrent((prev) => (prev === packages.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:text-left text-center">
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Pacotes
            </span>
            <h2 className="text-5xl text-gray-900">Confira nossos pacotes</h2>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-2xl text-blue-950 hover:bg-gray-300 transition"
              onClick={prevCard}
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-2xl text-white bg-blue-950 hover:bg-blue-900 transition"
              onClick={nextCard}
              aria-label="Próximo"
            >
              &#8594;
            </button>
          </div>
        </div>
      
        <div className="relative">
          {/* Mobile: apenas 1 card visível */}
          <div className="md:hidden flex justify-center">
            <div className="w-full max-w-md">
              <Card pkg={packages[current]} />
            </div>
          </div>
          {/* Desktop: 3 cards lado a lado */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente Card isolado para reuso
function Card({ pkg }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 flex flex-col transition hover:shadow-lg">
      <div className="w-full h-56 mb-4 rounded-2xl overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          width={400}
          height={224}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-1 rounded-full border text-sm font-medium ${
            pkg.basic
              ? "border-gray-400 text-gray-900 bg-white"
              : "border-gray-200 text-gray-400 bg-gray-100"
          }`}
          disabled={!pkg.basic}
        >
          Basic
        </button>
        <button
          className={`px-4 py-1 rounded-full border text-sm font-medium ${
            pkg.premium
              ? "border-gray-400 text-gray-900 bg-white"
              : "border-gray-200 text-gray-400 bg-gray-100"
          }`}
          disabled={!pkg.premium}
        >
          Premium
        </button>
      </div>
      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
      <div className="flex gap-8 mb-6">
        <div>
          <p className="text-xs text-gray-500 font-semibold">Atendimento</p>
          <p className="text-sm text-gray-800">{pkg.atendimento}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold">Tempo</p>
          <p className="text-sm text-gray-800">{pkg.tempo}</p>
        </div>
      </div>
      <div className="border-t pt-4 flex items-center justify-between mt-auto">
        <div>
          <p className="text-xs text-gray-500">A partir de</p>
          <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
        </div>
        <button className="bg-blue-950 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition">
          Contratar
        </button>
      </div>
    </div>
  );
}