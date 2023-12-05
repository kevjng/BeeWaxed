import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'no-store',
    }).then(r => r.json());

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 flex-wrap">
            {items.map(item => <ProductCard key={item.slug} item={item} />)}
        </div>
    );
};

export default ProductsList;