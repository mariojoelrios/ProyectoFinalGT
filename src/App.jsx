import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './componentes/NavbarL'
import { Inicio } from './SECCIONES/Inicio'
import { About } from './SECCIONES/About'
import { Products } from './SECCIONES/Products'
import { ERROR_404 } from './SECCIONES/ERROR_404'
import { Queries } from "./SECCIONES/Queries"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./componentes/Fonts.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Queries" element={<Queries />} />
          <Route path="*" element={<ERROR_404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
