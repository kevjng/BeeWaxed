import Link from "next/link"
import Image from "next/image"
import { db } from "../../../firebase/config"
import { collection, getDocs } from "firebase/firestore"
import Boton from "../ui/Boton"


const getAllProducts = async () => {
    const productsRef = collection(db, 'productos')
    const querySnapshot = await getDocs(productsRef)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const ProductsTable = async () => {
    const items = await getAllProducts()

    return (
        <>
            <Link
                href={"/admin/create"}
                className=""
            >
                <Boton className="!bg-green-500">+ Producto</Boton>
                
            </Link>

            <div className="overflow-x-auto my-10">
                
                <table className="w-full text-xs text-left text-gray-300">
                    <thead className="text-xs text-gray-500 uppercase">
                        <tr>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">Stock</th>
                            <th scope="col" className="px-3 py-2">Tipo</th>
                            <th scope="col" className="px-3 py-2">Imagen</th>
                            <th scope="col" className="px-3 py-2">Slug</th>
                            <th scope="col" className="px-3 py-2">Descripcion</th>
                            <th scope="col" className="px-3 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.slug}>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.price}</td>
                                    <td className="p-2">{item.stock}</td>
                                    <td className="p-2">{item.tipo}</td>
                                    <td className="p-2">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                            className={"rounded"}
                                        />
                                    </td>
                                    <td className="p-2">{item.slug}</td>
                                    <td className="p-2 truncate max-w-prose">{item.desc}</td>
                                    <td className="p-2">
                                        <Link
                                            href={`/admin/edit/${item.slug}`}
                                            className="rounded bg-green-400 p-2 text-white mx-1"
                                        >
                                            Editar
                                        </Link>

                                        <Link
                                            href={`/admin/delete/${item.slug}`}
                                            className="rounded bg-red-400 p-2 text-white mx-1"
                                        >
                                            Eliminar
                                        </Link>
                                     

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable

