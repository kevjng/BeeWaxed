import CartList from "../components/cart/CartList"
import ClientForm from "../components/cart/ClientForm"
import GoBack from "../components/ui/GoBack"

const CartPage = () => {

    return (
        <main className="mt-36">
            <GoBack/>
            <h2 className="text-3xl border-b py-4 mx-2 text-center font-bold tracking-tight text-gray-200">Tú Pedido</h2>
            
            <CartList />
            <h2 className="text-3xl pb-4 mx-2 text-center my-10 border-b font-bold tracking-tight text-gray-200">Datos de contacto</h2>
            <ClientForm />
        </main>
    )
}

export default CartPage

