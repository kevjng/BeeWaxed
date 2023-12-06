import ProductCard from "./ProductCard";

import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "../../../firebase/config"

const getProducts = async (categoria) => {

    const productsRef = collection(db, 'productos')

    const q = categoria === "todos"
        ? productsRef
        : query(productsRef, where('tipo', '==', categoria), limit (12))

    const querySnapshop = await getDocs( q )
    /*  console.log(querySnapshop.docs.map(docSnapshot=> docSnapshot.data())) */

    return querySnapshop.docs.map(docSnapshot => docSnapshot.data())
}


const ProductsList = async ({ categoria }) => {

    const items = await getProducts(categoria)

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 flex-wrap">

            {items.map(product => <ProductCard key={product.slug} item={product} />)}
             
            
        </div>
    );
};

export default ProductsList;