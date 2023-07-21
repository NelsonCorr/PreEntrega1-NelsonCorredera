
import { useState, useEffect } from 'react'
import {getProducts, getProductsByCategory} from '../asyncMock'
import ListaItems from './ListaItems'
import {useParams} from 'react-router-dom'

const Container = ({greeting}) => {
   const [products, setProducts] = useState([])

    const {categoriaId} = useParams()

   useEffect(()=>{
    const asyncFunc = categoriaId ? getProductsByCategory : getProducts
    
    asyncFunc(categoriaId)

     .then(response => {
        setProducts(response)
     })
     .catch(error => {
        console.error(error)
     })
   }, [categoriaId])

    return (
            <div>
            <h1>{greeting}</h1>
            <ListaItems products = {products}/>
            </div>
            )
}

export default Container