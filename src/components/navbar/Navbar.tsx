import { useNavigate, Link } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    return (
        <>
            <div className='w-full bg-black text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">

                    <Link to='/home' className='text-2xl font-bold uppercase'>Loja Games</Link>

                    <div className='flex gap-4'>
                
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar categoria</Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;