import { Image } from "@nextui-org/react";


const ProductCard = ( { item }) => {

    return (
        <div className="">
            
                <div className="flex flex-col rounded shadow-md p-4 transition-transform transform hover:scale-105">
                    <div className="">
                        <Image
                            alt={item.title}
                        src={`/imgs/products/${item.img}`}
                        
                        
                            
                        />
                        
                    </div>
                    <div className="flex flex-col justify-between">
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