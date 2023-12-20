import { useCartContext } from "../../../contexts/CartContext"
import Boton from "../ui/Boton"
import Image from "next/image"

const CartItem = ({ item }) => {

    const { removeItem } = useCartContext()

    return (
        <li className="shadow flex justify-between items-center gap-2 my-4 flex-wrap flex-col sm:flex-row ">
            <Image
                src={`${item.img}`}
                alt={item.title}
                width={200}
                height={200}
                className="rounded m-4"
            />
            <div className="text-center">
                <p className="text-sm text-amber-400 mx-2">Detalle:</p>
                <h3 className="mx-2">{item.title}</h3>
                <p className="text-sm font-semibold mx-2">Precio $ {item.price}</p>
                <p className="text-sm mx-2">Cantidad: {item.quantity}</p>
            </div>

            <Boton onClick={() => removeItem(item.slug)} className="!bg-red-600">
                <Image
                    src={'/icons/trash-icon.svg'}
                    alt="Trash icon"
                    width={30}
                    height={30}
                />
            </Boton>
        </li>
    )
}

export default CartItem