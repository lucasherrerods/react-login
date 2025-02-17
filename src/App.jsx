import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App