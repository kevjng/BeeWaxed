"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import GoBack from "../ui/GoBack"

import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../../../firebase/config"

import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        img: fileURL
    }).then(() => console.log("Producto subido!"))
}

const CreateForm = () => {
    
    const router = useRouter();


    const [values, setValues] = useState({
        title: '',
        desc: '',
        stock: 0,
        price: 0,
        tipo: '',
        slug: ''
    })
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
            await createProduct(values, file);
            toast.success('Producto agregado correctamente');

            router.back();
        } catch (error) {
            /* console.error('Error al agregar el producto', error); */

            toast.error('Error al agregar el producto');
        }
    };

    return (
        <div className="container m-auto mt-32 max-w-lg text-left">
            <GoBack />

            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl my-10 text-center">Formulario de Ingreso de producto</h2>


            <form onSubmit={handleSubmit} className="my-12 mx-4">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    allowmultiple={"false"}
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-white"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.tipo}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="tipo"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.desc}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4 text-black"
                    name="desc"
                    onChange={handleChange}
                />

                <Boton type="submit" className="!bg-green-500">Agregar Producto</Boton>
            </form>



        </div>
    )
}

export default CreateForm