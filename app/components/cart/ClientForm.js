"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { useCartContext } from "../../../contexts/CartContext"
import { db } from "../../../firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"


const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {
    const { cart } = useCartContext()

    const [values, setValues] = useState({
        email: '',
        direccion: '',
        nombre: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        /* console.log(result) */
    }

    return (
        <form onSubmit={handleSubmit} className="container w-full flex justify-between items-center gap-2 my-4 flex-wrap flex-col sm:flex-row mb-36">
            <input
                type="nombre"
                required
                placeholder="Nombre"
                className="p-2 rounded w-1/2 border border-blue-100 block m-4 text-black"
                name="nombre"
                onChange={handleChange}
            />
            <input
                type="direccion"
                required
                placeholder="Dirección"
                className="p-2 rounded w-1/2 border border-blue-100 block m-4 text-black"
                name="direccion"
                onChange={handleChange}
            />
            <input
                type="email"
                required
                placeholder="Email"
                className="p-2 rounded w-1/2 border border-blue-100 block m-4 text-black"
                name="email"
                onChange={handleChange}
            />
             
            <Boton type="submit" className="!bg-green-400">Terminar mi compra</Boton>
        </form>
    )
}

export default ClientForm