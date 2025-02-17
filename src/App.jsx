import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Register from './pages/Register'
import Login from './pages/Login'
import List from './pages/List'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/list' element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App