import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from './Components/Container';
import Navbar from "./Components/Navbar";
import ContenedorDetalleItems from './Components/ContenedorDetalleItems'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Container/>}/> 
        <Route path= '/categoria/:categoriaId' element={<Container/>}/> 
        <Route path= '/item/:itemId' element={<ContenedorDetalleItems/>}/> 
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 