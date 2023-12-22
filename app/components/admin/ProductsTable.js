import Link from "next/link";
import Image from "next/image";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Boton from "../ui/Boton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSync, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const getAllProducts = async () => {
    const productsRef = collection(db, 'productos');
    const querySnapshot = await getDocs(productsRef);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

const ProductsTable = async () => {
    const items = await getAllProducts();

    return (
        <div className="flex flex-wrap">
            <div className="flex justify-start flex-wrap mx-4">
                <Link href={"/admin/create"} className="">
                    <Boton className="!bg-green-600">
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Producto
                    </Boton>
                </Link>

                <Link href={"/admin/"}>
                    <Boton className="!bg-yellow-500">
                        <FontAwesomeIcon icon={faSync} className="mr-2" />
                        Actualizar
                    </Boton>
                </Link>
            </div>

            <div className="container overflow-x-auto my-10 w-screen">
                <table className="text-xs text-left text-gray-300 table-auto">
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
                        {items.map((item) => (
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
                                        className={"rounded-full"}
                                    />
                                </td>
                                <td className="p-2">{item.slug}</td>
                                <td className="p-2 truncate max-w-prose">{item.desc}</td>
                                <td className="p-2 flex gap-2">
                                    <Link href={`/admin/edit/${item.slug}`}>
                                        <Boton className="rounded !bg-blue-500 p-2 text-white">
                                            <FontAwesomeIcon icon={faEdit} className="mr-2" />
                                            Editar
                                        </Boton>
                                    </Link>

                                    <Link href={`/admin/delete/${item.slug}`}>
                                        <Boton className="rounded !bg-red-500 p-2 text-white">
                                            <FontAwesomeIcon icon={faTrash} className="mr-2" />
                                            Eliminar
                                        </Boton>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default ProductsTable;