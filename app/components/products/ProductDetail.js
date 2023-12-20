"use client"

import { useCartContext } from "../../../contexts/CartContext"
import QtySelector from "../../components/products/QtySelector"




const ProductDetail = ({ item }) => {

    /* console.log(item) */

    const { addToCart } = useCartContext()


    return (
        <div className="">
            <QtySelector item={item} />
        </div>
    )
}

export default ProductDetail