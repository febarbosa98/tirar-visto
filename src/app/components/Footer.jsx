export default function Footer(){
    return (
        <footer className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end ">
                    <div className="mb-4 md:mb-0 flex flex-col md:mx-0 mx-auto ">
                        <h2 className="text-lg font-semibold">Siga em nossa redes:</h2>
                        <div className="flex flex-wrap gap-4 mt-5">

                        <button className="border rounded-3xl p-3 font-semibold" >Instagram</button>
                        <button className="border rounded-3xl p-3 font-semibold">X</button>
                        <button className="border rounded-3xl p-3 font-semibold">Facebook</button>
                        <button className="border rounded-3xl p-3 font-semibold">Youtube</button>
                        </div>

                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-2  md:justify-between md:gap-32 gap-10 mx-auto md:mx-0"> 
                        <div className="flex flex-col ">
                            <h2 className="font-medium text-black">Empresa</h2>
                            <ul className="mt-2 text-gray-400 space-y-2">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Quem somos</a></li>
                                <li><a href="/">Serviços</a></li>
                                <li><a href="/">Contato</a></li>
                            </ul>
                        </div>
                         <div className="flex flex-col ">
                            <h2 className="font-medium text-black">Novidades</h2>
                            <ul className="mt-2 text-gray-400 space-y-2">
                                <li><a href="/">Passaporte</a></li>
                                <li><a href="/">Visto</a></li>
                                <li><a href="/">Entrevista</a></li>
                                <li><a href="/">Policia Federal</a></li>
                            </ul>
                        </div>
                         <div className="flex flex-col ">
                            <h2 className="font-medium text-black">Suporte</h2>
                            <ul className="mt-2 text-gray-400 space-y-2">
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Contato</a></li>
                                <li><a href="/">Dúvidas <br /> Frequente</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-15 text-center">
                    &copy; {new Date().getFullYear()} Tirar Visto - Todos os Direitos Reservados
                </div>
            </div>
        </footer>
    );
}