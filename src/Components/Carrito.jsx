import React, { useContext } from 'react'
import { CartContext } from '../contexto/ContextoCarrito'
import { Link } from 'react-router-dom';
import './Carrito.css'


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    
    const handleVaciar = () => {
        vaciarCarrito();
    }
    
  return (
    <div className='CardCarrito'>
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                
                <div key={prod.id}>
                    <br />
                    <div className='Card'>
                    <h3 className="nombreItem">{prod.nombre}</h3>
                    <img className='Img' src={prod.imagen} alt={prod.nombre} />
                    <p>Precio por unidad: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad pedida: {prod.cantidad}</p>
                    <br />
                    </div>
                
               </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className="ButtonCancel" onClick={handleVaciar}>Vaciar</button>
                <Link className="ButtonFin" to="/checkout">Finalizar compra</Link>
            </> :
            <h2 className='CarritoVacio'>Aun no agregaste productos a tu carrito!</h2>
        }
        
    </div>
    
  )
}

export default Carrito