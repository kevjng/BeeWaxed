/* import { Image } from "@nextui-org/react"; */

import Link from "next/link";
import Image from "next/image"


const ProductCard = ({ item }) => {

    return (

        <div>
            {/* <div className="bg-yellow-600 rounded-3xl overflow-hidden hover:scale-95 transition-transform transform hover:bg-yellow-500 hover:border-2 mx-2 ">

                <div className="container flex flex-col rounded p-2 items-center">

                    <Link href={`/productos/detail/${item.slug}`}>

                        <div className="hover:scale-110 transition-easy transform duration-400">

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

                            <div className="flex-wrap items-center justify-between">
                                <p className="font-semibold text-gray-200 text-lg sm:text-xl my-2 mx-auto">${item.price}</p>
                            </div>

                            <div className="flex flex-row items-center space-x-2 mx-2">
                                <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none ">
                                    ◀
                                </button>
                                <p className="text-gray-300 font-semibold">{item.stock}</p>
                                <button className="text-gray-400 py-2 px-3 rounded-full focus:outline-none ">
                                    ▶
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

            <div class="bg-lime-950 rounded-3xl overflow-hidden hover:scale-95 transition-transform transform hover:bg-lime-700 hover:border-2 mx-2 ">
                <Link href={`/productos/detail/${item.slug}`}>

                    <div className="hover:scale-110 transition-easy transform duration-400">

                        <Image
                            alt={item.title}
                            src={`/images/products/${item.img}`}
                            width={400}
                            height={400}
                            className="rounded-3xl" />
                    </div>

                </Link>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">{item.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-100 dark:text-gray-200">{item.desc}</p>
                    {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ver más
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a> */}
                </div>

            </div>

        </div>
    );
};

export default ProductCard;

/* 

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

*/