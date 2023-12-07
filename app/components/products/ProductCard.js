
import Link from "next/link";
import Image from "next/image"


const ProductCard = ({ item }) => {

    return (

        <div>
            
            <div class="bg-lime-950 rounded-3xl overflow-hidden hover:scale-95 transition-transform transform hover:bg-lime-700 hover:border-2 mx-2 ">
                <Link href={`/productos/detail/${item.slug}`}>

                    <div className="hover:scale-110 transition-easy transform duration-400">

                        <Image
                            alt={item.title}
                            src={`/images/products/${item.img}`}
                            width={400}
                            height={400}
                            className="rounded-3xl border-x-small" />
                    </div>

                </Link>
                <div class="p-5">
                    
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{item.title}</h5>
                    
                    <p class="mb-3 font-normal text-gray-100 dark:text-gray-200">{item.desc}</p>
                    
                </div>

            </div>

        </div>
    );
};

export default ProductCard;

