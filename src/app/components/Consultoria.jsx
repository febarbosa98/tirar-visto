
import React from "react";

export default function Consultoria() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex text-left  ">
          <h1 className="text-2xl md:text-[56px]  text-gray-900  ">
          CONSULTORIA COMPLETA PARA <br className="hidden md:block" />TIRAR SEU VISTO
        </h1>
        <div className="flex   mx-auto">
        <img src="/img/tel.svg" alt="" />
        </div>
        </div>

        <div className="flex flex-row justify-end items-center gap-x-40 ">
          
         <img src="/img/rel.svg" alt="" className="" />
        
          <h1 className="text-2xl md:text-[56px] text-gray-900 text-right">
          VOCÊ ESTÁ EM BOAS MÃOS!
        </h1>
        
        </div>
        
      </div>
    </section>
  );
}

