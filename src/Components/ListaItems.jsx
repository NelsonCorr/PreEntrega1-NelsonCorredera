import './ListaItems.css'
import Items from './Items'

const ListaItems = ({products}) => {
    console.log(products)
    const map = Array.isArray(products)

    return (
        <div className='Lista'>

            {map ? products.map(prod => <Items key={prod.id } {...prod}/>) :  <Items {...products} />}

        </div>
    )
}

export default ListaItems