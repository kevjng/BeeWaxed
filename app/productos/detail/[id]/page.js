import ProductDetail from "../../../components/products/ProductDetail"
import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

import GoBack from "../../../components/ui/GoBack"

import Image from "next/image"


const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}



const Detail = async ({ params }) => {
    const { id } = params

    const item = await getProduct(id)
    /* console.log(item)*/
    
    return (
        <div className="container m-auto mt-24 ">

            {/* <h2 className="text-4x1 text-bold text-yellow-300 my-4">Detalle de Producto</h2> */}

            < div className="container my-24 mx-auto md:px-6" >

                
            </div >

            <ProductDetail item={item} />

            <div>


            </div>
        </div>
    )
}

export default Detail

