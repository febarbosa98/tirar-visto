export default function Duvida() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-45 gap-20 text-center md:text-left ">
                   <div className="flex flex-col justify-center md:items-start items-center gap-5">
                    <h1 className="text-5xl ">Está com alguma <br />dúvida?</h1>
                    <p className="text-gray-400">Entre em contato através do nosso canal direto ao cliente <br /> através do botão abaixo</p>
                    <button className="bg-blue-950 text-white p-4 rounded-3xl">Central de Atendimento</button>
                   </div>
                   <div className="flex flex-row justify-around items-center ">
                    <a href="/" className="text-4xl border-b-2 flex flex-row pb-2 justify-around w-sm items-center">Receba novidades <img src="/img/arrow-up.svg" alt="" /></a>
                 
                   </div>
                </div>
            </div>
        </section>
    );
}