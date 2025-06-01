export default function Etapas() {
  return (
    <section className="bg-white py-4 ">
      <div className="max-w-7xl mx-auto px-4 gap-10 items-center ">
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4" >
            <div className="text-center md:text-left">
          <span className="bg-yellow-400 text-xs text-black p-3 rounded-full font-bold">Veja como funciona</span>
          <h2 className="md:text-[56px] text-2xl font-bold my-4">Sua tranquilidade <br className="hidden md:block" /> não tem preço!</h2>
            </div>

          
          <p className="text-gray-400 mb-6 text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          
        </div>

          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
             
          <img src="/img/casal.svg" alt="Família viajando" className="w-full h-auto " />


        <div className="flex flex-col justify-center ml-10 gap-10 md:mt-0 mt-10">
        
            <div>
              <h2 className="sm:text-5xl text-2xl ">Etapa Inicial</h2>
              <p className="text-gray-400 text-lg mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-5xl text-2xl  ">Processo de Entrevista</h2>
              <a href="#" className="text-base cursor-pointer ">+ Leia mais</a>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-5xl text-2xl ">Entrega de Documentos</h2>
              <a href="#" className="text-base ">+ Leia mais</a>
            </div>
          
        </div>
          </div>
          
        </div>
       
      </div>
    </section>
  );
}
