"use client"

import { useCartContext } from "../../../contexts/CartContext"
import Boton from "../ui/Boton"




const ProductDetail = ({ item }) => {

    console.log(item)

    const { addToCart } = useCartContext()
    
  
    return (
        <div className="">
            <Boton onClick={() => addToCart(item)}>Agregar al carrito</Boton>
        </div>
    )
}

export default ProductDetail