/* import ProductCard from "../../components/products/ProductCard"
import { mockData } from "../../data/products" */

import CategoriesMenu from "../../components/products/CategoriesMenu"
import ProductsList from "../../components/products/ProductList"

/* export const metadata = {
    title: 'BeeWaxed - Tienda',

} */

export const generateMetadata = async ({ params, searchParams }, parent) => {

    return {
        title: `BeeWaxed - ${params.categoria}`,
    }
}

const Tienda = ({ params }) => {
    /* console.log(params)

    const { categoria } = params

    const items = categoria === 'all'
        ? mockData
        : mockData.filter(product => product.tipo === categoria)
 */

    const { categoria } = params


    return (

        <div className="container my-5" >

            {/* <div className="my-8">
                <h1>
                    Estas en la categoria: {categoria}
                </h1>
            </div> */}

            {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"> */}

            {/*  {items.map(product => <ProductCard key={product.code} item={product} />)} */}
            
            <div className="flex gap-10">

                <CategoriesMenu />
                <ProductsList categoria={categoria} />

            </div>

            {/*  </section> */}

        </div>
    )

}

export default Tienda


