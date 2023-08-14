import React from 'react'

const Contador = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="Controls">
            <button className="Button" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="Button" onClick={handleSumar}>+</button>
        </div>
        <button className="Button" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default Contador