import { Link } from "react-router"

function Register() {
  return (
    <div className="w-lg p-4 mt-20 m-auto text-center bg-inherit border border-gray-300 shadow-lg rounded-md">
      <h2 className="text-xl mb-10">Cadastro</h2>
      <form className="flex flex-col gap-6 mb-10">
        <input type="text" placeholder="Nome" className="border border-gray-300 focus:border-transparent focus:outline-blue-400 focus:ring-1 focus:ring-blue-800 p-2 rounded-md" />
        <input type="email" placeholder="E-mail" className="border border-gray-300 focus:border-transparent focus:outline-blue-400 focus:ring-1 focus:ring-blue-800 p-2 rounded-md" />
        <input type="password" placeholder="Senha" className="border border-gray-300 focus:border-transparent focus:outline-blue-400 focus:ring-1 focus:ring-blue-800 p-2 rounded-md" />
        <button className="py-2 px-1 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:translate-y-2 transition duration-300 ease-in-out">Cadastrar</button>
      </form>
      <Link to={"/login"} className="underline text-blue-500">Já tem uma conta? Faça login</Link>
    </div>
  )
}

export default Register