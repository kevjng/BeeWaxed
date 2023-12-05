import ProductDetail from "../../../components/products/ProductDetail"

const DetailPage = ({ params }) => {
    const { slug } = params

    return (
        <div className="container m-auto mt-10">
            <ProductDetail slug={slug} />
        </div>
    )
}

export default DetailPage