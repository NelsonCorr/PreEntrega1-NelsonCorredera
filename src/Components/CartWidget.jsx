import React, { useContext } from 'react'
import CarritoImage from '../assets/CarritoImage.svg'
import { CartContext } from '../contexto/ContextoCarrito'
import { Link } from 'react-router-dom'




const CartWidget = () => {
    const {TotalCarrito} = useContext(CartContext)
    return (
            
            <Link to='/cart' className='CartWidget' >
            <img src={CarritoImage} alt="imagen carrito" />
            <span>{TotalCarrito()} </span>
            </Link>
                            
        )
}

export default CartWidget;
 


