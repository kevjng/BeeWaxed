"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { db, storage } from "../../../firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import GoBack from "../ui/GoBack"

import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const updateProduct = async (slug, values, file) => {
    try {
        let fileURL = values.img;

        if (file) {
            const uniqueSlug = `${slug}_${Date.now()}`;
            const storageRef = ref(storage, uniqueSlug);
            const fileSnapshot = await uploadBytes(storageRef, file);
            fileURL = await getDownloadURL(fileSnapshot.ref);
        }

        const docRef = doc(db, "productos", slug);
        await updateDoc(docRef, {
            title: values.title,
            desc: values.desc,
            stock: Number(values.stock),
            price: Number(values.price),
            tipo: values.tipo,
            img: fileURL,
        });
        router.back();
    } catch (error) {
        console.error('Error al editar el producto', error)

    }
};


const EditForm = ({ item }) => {

    const router = useRouter();

    const { title, desc, stock, price, tipo, img } = item
    const [values, setValues] = useState({ title, desc, stock, price, tipo, img })
    const [file, setFile] = useState(null)
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(item.slug, values, file)
            toast.success('Producto editado correctamente')

            router.back();
        } catch (error) {
            /* console.error('Error al editar el producto', error) */

            toast.error('Error al editar el producto')
        }
    };

    return (
        <div className="container m-auto mt-32 max-w-lg text-left">

            <GoBack />

            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl my-10 text-center">Formulario de Edicion del producto:</h2>
            <h3 className="text-2xl font-bold tracking-tight text-yellow-300 sm:text-4xl my-10 text-center">{values.title}</h3>

            <form onSubmit={handleSubmit} className="my-12 text-black mx-4">
                <label className="text-white">Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label className="text-white">Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-white"
                />
                <label className="text-white">Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label className="text-white">Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label className="text-white">Categoria: </label>
                <input
                    type="text"
                    value={values.tipo}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="tipo"
                    onChange={handleChange}
                />

                <label className="text-white">Descripción: </label>
                <textarea
                    value={values.desc}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="desc"
                    onChange={handleChange}
                />
                <Boton type="submit" className="!bg-red-500">Modificar producto</Boton>
            </form>
        </div>
    )
}

export default EditForm