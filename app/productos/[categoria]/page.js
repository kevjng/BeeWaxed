/* import ProductCard from "../../components/products/ProductCard"
import { mockData } from "../../data/products" */

import CategoriesMenu from "../../components/products/CategoriesMenu"
import ProductsList from "../../components/products/ProductList"
import { Suspense } from "react"

import 'ldrs/ring'
import 'ldrs/hourglass'
import 'ldrs/bouncyArc'




/* export const metadata = {
    title: 'BeeWaxed - Tienda',

} */

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `BeeWaxed - ${params.categoria}`,
    }
}

export const revalidate = 3600

export async function generateStaticParams() {
    return [
        { categoria: 'todos' },
        { categoria: 'luminosas' },
        { categoria: 'galaxia' },
        { categoria: 'lisa' },
        { categoria: 'vintqage' },
        { categoria: 'clasic' },
    ]
}

const Productos = ({ params }) => {
    /* console.log(params)

    const { categoria } = params

    const items = categoria === 'todos'
        ? mockData
        : mockData.filter(product => product.tipo === categoria)*/

    const { categoria } = params


    return (

        <main className="container my-5" >

            <div className="flex gap-10">

                <CategoriesMenu />

                <Suspense fallback={
                    <div className="text-yellow-400">

                        Cargando Productos..

                        <l-bouncy-arc
                            size="70"
                            speed="1.65"
                            color="white"
                        ></l-bouncy-arc>

                    </div>}>
                    
                    <ProductsList categoria={categoria} />

                </Suspense>

            </div>



        </main>
    )

}

export default Productos


