import { useContext, useState } from "react";
import './DetalleItems.css'
import Contador from "./Contador"
import { CartContext } from "../contexto/ContextoCarrito";


const DetalleItems = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="CardDet">
        <div className="Header">
            <h3 className="nombreItem">{item.nombre}</h3>
            <img className="Img"src={item.imagen} alt={item.titulo} />
            <div className="info">
                <p className="datos">{item.descripcion}</p>
                <p className="datos">Categoría: {item.categoria}</p>
                <p className="datos">${item.precio}</p>
                <Contador 
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default DetalleItems