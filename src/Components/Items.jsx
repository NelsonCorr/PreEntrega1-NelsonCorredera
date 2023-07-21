import './Items.css'
import { Link } from 'react-router-dom';
const Items = ({id, nombre,img, precio, stock}) => {

    return (
        <article class= "Card">
            <header class = "Header">
                <h2 class= "nombreItem">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} class= "Img" />
            </picture>
        <section class= "info">
            <p class= "datos">
                Precio: ${precio}
            </p>
            <p class= "datos">
                Stock: {stock}
            </p>
        </section>
        <footer class = 'detalles'>
            <Link to={`/item/${id}`} class= 'detalle'>Ver detalle</Link>
        </footer>
        </article>
    )
}

export default Items