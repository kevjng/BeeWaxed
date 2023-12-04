import ProductCard from "./ProductCard"

const ProductsList = async ({ categoria }) => {
    
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <div className="grid gap-2 ">
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </div>
    )
}

export default ProductsList