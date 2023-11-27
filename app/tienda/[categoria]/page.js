

import ProductCard from "../../components/ui/ProductCard.js"

export const generateMetadata = async ({params,}) =>{
    return {
        title: 'BeeWaxed - ' + params.categoria
    }
}

const Tienda = ({ params }) => {
    console.log(params)

    const { categoria } = params

  

    return (
        <div className="container my-5" >

            <div className="my-4">
                <h1>
                    {categoria}
                </h1>
            </div>
             
            <ProductCard/>
            
        </div>
    )

}

export default Tienda


