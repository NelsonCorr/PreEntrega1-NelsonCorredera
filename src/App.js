import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from './Components/Container';
import Navbar from "./Components/Navbar";
import ContenedorDetalleItems from './Components/ContenedorDetalleItems'
import { CartProvider } from './contexto/ContextoCarrito';
import Carrito from './Components/Carrito'
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Container greeting={'Productos'}/>}/> 
        <Route path= '/categoria/:categoriaId' element={<Container greeting={'Productos por categoria'}/>}/> 
        <Route path= '/item/:id' element={<ContenedorDetalleItems/>}/> 
        <Route path= '/cart' element={<Carrito />} />
        <Route path= '/checkout' element={<Checkout />} />
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/> 
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App; 