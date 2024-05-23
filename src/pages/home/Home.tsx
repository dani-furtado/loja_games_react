function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            Seja Bem Vinde a melhor loja de Games!
                        </h2>
                        
                        <p className="text-xl">Aqui você encontra os melhores jogos</p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded text-white border-white border-solid border-2 py-2 px-4">
                                Novo Produto
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/pgmcw5jyhq/OBJECTS.png?updatedAt=1716482608255"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home