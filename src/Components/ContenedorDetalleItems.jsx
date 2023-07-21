import './ContenedorDetalleItems.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../asyncMock'
import DetalleItems from './DetalleItems'
import { useParams } from 'react-router-dom'



const ContenedorDetalleItems =() => {
    const[product, setProduct] = useState(null)

    const {itemId} = useParams() 

    useEffect (() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className='ContenedorDetalleItems'>
            <DetalleItems {...product} />
        </div>
    )
}

export default ContenedorDetalleItems