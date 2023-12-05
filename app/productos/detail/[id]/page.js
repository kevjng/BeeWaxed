import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
    
    return docSnapshot.data()
}


const Detail = async ({ params }) => {
    const { id } = params

    const item = await getProduct(id)
    console.log(item)

    return (
        <div className="container m-auto mt-24">
            <h2 className="text-4x1 text-bold text-red-700">Detalle de Producto</h2>
            <hr/>
            <div> </div>
        </div>
    )
}

export default Detail