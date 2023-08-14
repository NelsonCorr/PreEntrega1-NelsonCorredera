import './Items.css'
import { Link } from 'react-router-dom';
const Items = ({id, nombre,imagen, precio, stock}) => {

    return (
        <article className= "Card">
            <header className = "Header">
                <h2 className= "nombreItem">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className= "Img" />
            </picture>
        <section className= "info">
            <p className= "datos">
                Precio: ${precio}
            </p>
            <p className= "datos">
                Stock: {stock}
            </p>
        </section>
        <footer className = 'detalles'>
            <Link to={`/item/${id}`} className= 'detalle'>Ver detalle</Link>
        </footer>
        </article>
    )
}

export default Items