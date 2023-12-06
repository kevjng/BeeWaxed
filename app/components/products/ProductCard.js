/* import { Image } from "@nextui-org/react"; */

import Link from "next/link";
import Image from "next/image"


const ProductCard = ({ item }) => {

    return (


        <div className="bg-yellow-600 rounded-3xl overflow-hidden hover:scale-95 transition-transform transform hover:bg-yellow-500 hover:border-2 mx-2 ">

            <div className="container flex flex-col rounded p-2 items-center">

                <Link href={`/productos/detail/${item.slug}`}>

                    <div className="hover:scale-110 transition-easy transform duration-400">
                        {/*  <Image
                                alt={item.title}
                                src={`/images/products/${item.img}`}
                            /> */}

                        <Image
                            alt={item.title}
                            src={`/images/products/${item.img}`}
                            width={200}
                            height={200}
                            className="rounded-3xl" />
                    </div>

                </Link>

                <div className="flex flex-col justify-between rounded m-2">

                    <h2 className="text-xl sm:text-lg md:text-2x1 lg:text-3xl font-bold my-2 m-auto">{item.title}</h2>
                    <p className="text-gray-100 mb-4 sm:text-sm md:text-md lg:text-md mx-2 text-center">{item.desc}</p>

                    <div className="flex flex-wrap justify-between items-center">

                        {/* <div className="flex-wrap items-center justify-between">
                            <p className="font-semibold text-gray-200 text-lg sm:text-xl my-2 mx-auto">${item.price}</p>
                        </div> */}
                       
                       {/*  <div className="flex flex-row items-center space-x-2 mx-2">
                            <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none ">
                                ◀
                            </button>
                            <p className="text-gray-300 font-semibold">{item.stock}</p>
                            <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none ">
                                ▶
                            </button>
                        </div> */}
                    </div>

                </div>

            </div>

        </div>

    );
};

export default ProductCard;