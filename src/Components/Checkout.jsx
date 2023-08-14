import React, { useContext } from 'react'
import { CartContext } from '../contexto/ContextoCarrito'
import {collection, addDoc} from 'firebase/firestore'
import {dataBase} from '../Firebase/config'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './Checkout.css'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
            const pedido = {
                cliente: data,
                productos: carrito,
                total: precioTotal()
            }

            const pedidosRef = collection(dataBase, "pedidos");

            addDoc(pedidosRef, pedido)
                .then((doc) => {
                    setPedidoId(doc.id);
                    vaciarCarrito();
                })
    }
    if (pedidoId){
        return(
            <div className="Container">
                <h1 className='title'>Compra finalizada</h1>
                <p>el id de tu pedido es: {pedidoId}</p>
            </div>
        )

    }

    return(
        <div className="container">
            <h1 className='main-title'>Contacto</h1>
            <form onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
                <input type="email" placeholder='ingresa tu email' {...register("email")} />
                <input type="phone" placeholder='ingresa tu numero celular' {...register("telefono")} />
                <button className='enviar' type='submit'>Finalizar compra</button>
            </form>
        </div>
    )
    
}

export default Checkout