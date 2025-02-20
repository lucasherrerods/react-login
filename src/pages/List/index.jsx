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
      <h2>Listar Usuários</h2>
    </div>
  )
}

export default List