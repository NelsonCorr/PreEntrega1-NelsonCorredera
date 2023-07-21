import './DetalleItems.css'
import Contador from './Contador'

const DetalleItems = ({id, nombre, img, categoria, descripcion, precio, stock}) =>{

    return (
        <article class = "CardDet">
            <header class= "Header">
                <h2 className="nombreItem">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="Img"/>
            </picture>
            <section class= "info">
                <p className= "datos">
                    categoria: {categoria}
                </p>
                <p className= "datos">
                    Descripcion: {descripcion}
                </p>
                <p className= "datos">
                    Precio: ${precio}
                </p>
            </section>
            <footer className='FooterItem'>
                <Contador initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default DetalleItems