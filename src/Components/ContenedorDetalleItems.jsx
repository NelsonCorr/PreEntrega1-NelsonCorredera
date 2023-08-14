import './ContenedorDetalleItems.css'
import { useState, useEffect } from 'react'
import DetalleItems from './DetalleItems'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { dataBase } from '../Firebase/config'


const ContenedorDetalleItems = () => {
    const [product, setProduct] = useState(null)

    const  id  = useParams().id;
    
    useEffect(() => {

        const docRef = doc(dataBase, "Maquinas", id) ;
       
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), id: resp.id }
                  
                )
            })
    }, [id])
 
    return (
        <div className='ContenedorDetalleItems'>
            {product && <DetalleItems item={product} />}
            
        </div>
    )
}

export default ContenedorDetalleItems