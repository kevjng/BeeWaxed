import CartList from "../components/cart/CartList"
import ClientForm from "../components/cart/ClientForm"

const CartPage = () => {

    return (
        <main className="mt-36">
            <h2 className="text-3xl border-b pb-4 mx-2 text-gray-500 text-center">Tu pedido</h2>
            <CartList />
            <h2 className="text-3xl pb-4 mx-2 text-gray-500 text-center">Datos de contacto</h2>
            <ClientForm />
        </main>
    )
}

export default CartPage