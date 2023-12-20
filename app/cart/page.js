import CartList from "../components/cart/CartList"
import ClientForm from "../components/cart/ClientForm"

const CartPage = () => {

    return (
        <main className="mt-36">
            <h2 className="text-3xl border-b pb-4 mx-2 text-center font-bold tracking-tight text-yellow-400">Pedido</h2>
            <CartList />
            <h2 className="text-3xl pb-4 mx-2 text-center my-10 border-b font-bold tracking-tight text-yellow-400">Datos de contacto</h2>
            <ClientForm />
        </main>
    )
}

export default CartPage

