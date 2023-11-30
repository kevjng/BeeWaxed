import { Image } from "@nextui-org/react";
import Link from "next/link";


const ProductCard = ({ item }) => {

    return (
        <div className="bg-fuchsia-950 rounded-xl overflow-hidden hover:scale-95 hover:col transition-transform transform hover:bg-purple-800 mx-4 my-2">


            <div className="flex flex-col rounded p-2">

                <Link href={`/tienda/detail/${item.title}`}>
                    <div className="hover:scale-110 transition-easy transform duration-400">
                        <Image
                            alt={item.title}
                            src={`/images/products/${item.img}`}
                        />

                    </div>
                </Link>

                <div className="flex flex-col justify-between rounded m-2">

                    <h2 className="text-xl sm:text-2xl font-bold my-6">{item.title}</h2>
                    <p className="text-gray-400 mb-4">{item.desc}</p>

                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center">
                            <p className="font-semibold text-gray-200 text-lg sm:text-xl my-2">${item.price}</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none focus:ring ">
                                ◀
                            </button>
                            <p className="text-gray-300 font-semibold">{item.stock}</p>
                            <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none focus:ring ">
                                ▶
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;