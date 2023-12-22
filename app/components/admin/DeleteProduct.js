"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoBack from '../ui/GoBack';
import Boton from '../ui/Boton';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const DeleteProduct = ({ item }) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (isDeleting) return;

        try {
            setIsDeleting(true);

            const docRef = doc(db, 'productos', item.slug);
            await deleteDoc(docRef);

            const storageRef = ref(storage, item.slug);
            await deleteObject(storageRef);

            toast.success('Producto eliminado correctamente');
            router.back();
        } catch (error) {
            /* console.error('Error al eliminar el producto', error); */
            toast.error('Error al eliminar el producto');
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
       
            <div className="container m-auto mt-32 max-w-lg text-left">

                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl my-10 text-center">
                    `¿Estás seguro que deseas eliminar el producto ${item.title}`?
                </h2>

                <div className="flex justify-center">
                    <Boton
                        onClick={handleDelete}
                        className="!bg-red-500 text-white font-bold py-2 px-2 rounded"
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Eliminando...' : 'Eliminar Producto'}
                    </Boton>

                    <GoBack />

                </div>

                <ToastContainer />
            </div>
        </div>
    )
}

export default DeleteProduct