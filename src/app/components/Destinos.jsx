import Image from "next/image"
export default function DestinationsSection() {
  const destinations = [
    { name: "Bali, indonesia", image: "/img/bali.svg" },
    { name: "Nova York, Estados Unidos", image: "/img/ny.svg", heigh: "300px" },
    { name: "Santorini, Grecia", image: "/img/Santorini.svg" },
    { name: "Paris, França", image: "/img/paris.svg" },
    { name: "Cidade do Cabo, Africa do Sul", image: "/img/rio.svg", heigh: "300px" },
    { name: "Mumbai, India", image: "/img/mumbai.svg" },
  ];

  // Divide em duas linhas de 3 itens cada
  const firstRow = destinations.slice(0, 3);
  const secondRow = destinations.slice(3, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto  w-80 md:w-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Top Destinos
          </div>
          <h2 className="sm:text-5xl text-2xl font-bold text-gray-900 mb-4">Destinos mais procurados</h2>
          <p className="text-gray-600 mb-8">
            Confira os destinos mais procurados por nossos clientes nos últimos meses, <br /> qual seria o seu novo destino?
          </p>
          <button className="bg-blue-950 hover:bg-blue-900 cursor-pointer p-3 rounded-3xl text-white">Conheça mais</button>
        </div>

        {/* Primeira linha: alinhada embaixo */}
        <div className="flex flex-row gap-2 mb-2 min-h-[300px] items-center flex-wrap md:flex-nowrap md:items-end">
          {firstRow.map((destination, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg flex items-end md:w-1/3 w-screen" >
              <img
                src={destination.image}
                alt={destination.name}
                width="240"
                style={{ height: destination.heigh || "240px" }}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-end justify-center">
                <h3 className="text-white text-xl bg-white/30 backdrop-blur-md  p-2 rounded-3xl mb-2">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Segunda linha: alinhada em cima */}
        <div className="flex gap-2 min-h-[300px] items-center flex-wrap md:flex-nowrap md:items-start">
          {secondRow.map((destination, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg flex items-end md:w-1/3 w-screen">
              <img
                src={destination.image}
                alt={destination.name}
                style={{ height: destination.heigh || "240px", }}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0  flex items-end justify-center">
                <h3 className="text-white text-xl bg-white/30 backdrop-blur-md  p-2 rounded-3xl mb-2 ">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}