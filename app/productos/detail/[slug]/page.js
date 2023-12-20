import ProductDetail from "../../../components/products/ProductDetail"
import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"


const getProduct = async (slug) => {
    const docRef = doc(db, 'productos', slug)
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}



const Detail = async ({ params }) => {
    const { slug } = params

    const item = await getProduct(slug)
    
    
    return (
        <div className="container m-auto mt-24 ">


            < div className="container my-24 mx-auto md:px-6" >

                
            </div >

            <ProductDetail item={item} />

            <div>


            </div>
        </div>
    )
}

export default Detail

