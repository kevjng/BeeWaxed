import DeleteProduct from "../../../components/admin/DeleteProduct"

const DeleteProductPage = async ({ params }) => {
    const { slug } = params

    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: 'no-store'
    }).then(res => res.json())


    return (
        <div>
            <DeleteProduct item={item} />
        </div>
    )

}

export default DeleteProductPage