import { useEffect, useState } from 'react'
import api from '../../services/api.js'

function List() {
  const [allUsers, setAllUsers] = useState()

  //colocando a função dentro do useEffect para ser chamada quando a página for carregada
  useEffect(() => {
    async function loadUsers() {

      const token = localStorage.getItem('token')

      //realizando a request e enviando o token para autenticação
      const { data: { users } } = await api.get('/list', {
        headers: { Authorization: `Bearer ${token}` }
      })

      setAllUsers(users)
    }

    loadUsers()

  }, [])

  return (
    <div>
      <div className='m-12 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Usuários ativos</h2>
        <div>
          <p>Database: MongoDB</p>
          <p>Admin: lucasherrerods</p>
        </div>
      </div>
      <ul className='w-full md:w-auto p-8 m-10 grid grid-cols-3 gap-20 bg-inherit border border-gray-300 shadow-lg rounded-md'>
        {allUsers && allUsers.length > 0 && allUsers.map((user) => (
          <li key={user.id} className='py-4 px-8 rounded-lg bg-blue-200 text-white hover:scale-105 duration-300 ease-in-out hover:bg-indigo-900'>
            <p className='tracking-[.1rem]'><span className='font-bold'>ID:</span> {user.id}</p>
            <p className='tracking-[.1rem]'><span className='font-bold'>Nome:</span> {user.name}</p>
            <p className='tracking-[.1rem]'><span className='font-bold tracking-normal'>E-mail:</span> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List