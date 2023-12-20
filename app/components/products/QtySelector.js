"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "../../../contexts/CartContext"
import Link from "next/link"

const QtySelector = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart(item.slug)
                    ? <Link
                        href={"/cart"}
                        className="w-full rounded-lg py-2 px-4 bg-blue-600 text-white text-center hover:translate-x-4 transition mx-2 ">
                        Terminar mi compra
                    </Link>
                    : <div className="grid grid-cols-2 gap-4 m-auto mx-10">
                        <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
                        <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
                    </div>
            }
        </div>
    )
}

export default QtySelector