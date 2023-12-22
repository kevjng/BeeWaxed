"use client"
import CartItem from "../cart/CartItem"
import { useCartContext } from "../../../contexts/CartContext"


const CartList = () => {
    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug} />)
                }
            </ul>

            <p className="text-xl my-4 pb-4 text-right mx-2">Total: ${totalPrice()}</p>
        </div>
    )
}

export default CartList