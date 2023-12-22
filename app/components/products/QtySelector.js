"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCheck } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex flex-wrap my-6 justify-center">
            {
                isInCart(item.slug)
                    ? <Link href={"/cart"} className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center mx-2 justify-center  ">
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        Terminar compra
                    </Link>
                    : <div className="flex flex-wrap justify-center">
                        <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
                        <Boton className="" onClick={handleAdd}>
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                            Agregar al carrito
                        </Boton>
                    </div>
            }
        </div>
    )
}

export default QtySelector