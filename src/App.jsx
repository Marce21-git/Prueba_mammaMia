import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Carrito } from './views/Carrrito'
import { Pizza } from './views/Pizza'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

    </>

  )
}

export default App
