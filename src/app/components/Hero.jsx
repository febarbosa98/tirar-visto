export default function Hero() {
  return (
    
    <section className="py-3 ">
        
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-0 md:gap-10 ">
        
        <div className="flex flex-col justify-between items-start py-4 text-center md:text-left">
            <header className="bg-white  md:max-w-2xl w-4/4" >
             <div className=" py-4 flex flex-col md:flex-row items-center  ">
                <div className="flex items-center gap-2">
                    <img src="/img/logo1.svg" alt="Logo Tirar Visto" className="h-6 w-auto" />
                </div>
             <nav className="flex space-x-8 text-sm text-gray-700">
                <a href="#" className="ml-3 font-bold">Home</a>
                <a href="#">Quem somos</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
            </nav>
            </div>
            </header>

          <h1 className="sm:text-5xl font-bold leading-tight text-3xl  ">
            Tire seu Visto conosco e<br />não tenha nenhuma surpresa negativa!
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 mb-8">
            <div>

          <p className="text-gray-600 mb-6">
            Com uma equipe altamente treinada, nós te acompanhamos em todas as etapas do seu processo para que seja o mais rápido e seguro. Uma consultoria completa para que sua família não tenha nenhuma preocupação na sua viagem.
          </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-all">
              Saiba mais
            </button>
            </div>
            <div className="flex  flex-col p-0 gap-2 mx-auto  md:items-start">
              <img src="/img/videoBruna.svg" alt="Bruna" className="w-48 h-28 " />
              <div className="grid  grid-flow-col items-center gap-10">
                <div>

                <p className="text-sm font-semibold">Conheça a Bruna</p>
                <span className="text-xs text-gray-500  cursor-pointer">Ver vídeo</span>
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-2xl text-white bg-blue-950 hover:bg-blue-900 transition">&#8594;
                </button>
              </div>

            </div>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-3xl font-bold ">509</p>
              <p className="text-sm text-gray-400">Vistos Tratados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">602</p>
              <p className="text-sm text-gray-400">Passaportes Tratados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">634</p>
              <p className="text-sm text-gray-400">Famílias Felizes</p>
            </div>
          </div>
        </div>
        <div className="relative">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-shadow-black font-semibold text-sm px-4 py-2 rounded-full transition-all absolute top-4 right-4 z-10">
          Tirar meu visto agora
            </button>
          <img
            src="/img/caa.svg"
            alt="Paisagem USA"
            className="rounded-2xl object-cover w-full h-full mt-3"
          />
          <div className="absolute bottom-6 left-6 bg-opacity-50 text-white p-6 rounded-xl max-w-md">
            
            <h2 className="text-3xl font-bold mb-2">Realize o seu sonho com a ajuda da Tirar Visto!</h2>
            <p className="text-sm">
              Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}