
import { useState, useEffect } from 'react'
import ListaItems from './ListaItems'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where} from "firebase/firestore" 
import { dataBase } from '../Firebase/config'


const Container = ({greeting}) => {
   const [products, setProducts] = useState([])

    const categoriaId = useParams().categoriaId

   useEffect(()=>{

    const productosRef = collection(dataBase, "Maquinas");
    
      const qery = categoriaId ? query(productosRef, where("categoria", "==", categoriaId)) : productosRef;

    getDocs(qery)
    .then((resp)=>{
      setProducts(
         resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
         })
      )
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