import { Image } from "@nextui-org/react";
import Link from "next/link";


const ProductCard = ({ item }) => {

    return (
        <div className="bg-stripe-gradient m-auto">

            <div className="flex flex-col rounded shadow-md p-4 transition-transform transform hover:scale-105">
                <Link href={`/tienda/detail/${item.title}`}>
                    <div className="">
                        <Image
                            alt={item.title}
                            src={`/images/products/${item.img}`}
                            
                        />

                    </div>
                </Link>
                <div className="flex flex-col justify-between rounded">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <button className="text-gray-600 py-2 px-3 rounded-full focus:outline-none focus:ring focus:border-blue-300">
                                -
                            </button>
                            <p className="text-gray-800 font-semibold">{item.stock}</p>
                            <button className="text-gray-600 py-2 px-3 rounded-full focus:outline-none focus:ring focus:border-blue-300">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;