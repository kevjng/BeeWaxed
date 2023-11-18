
const list = [
    {
        title: "Yummy",
        desc: "Una planta de aspecto exquisito, fácil de cuidar y perfecta para iluminar cualquier rincón de tu hogar.",
        img: "/images/1.jpg",
        price: "$5.50",
        tipo: "luminosa",
        stock: 8,
    },
    {
        title: "Asensia",
        desc: "Asensia, una planta con un toque galáctico que aporta un aspecto único y fascinante. Ideal para los amantes de la astronomía.",
        img: "/images/2.jpg",
        price: "$3.00",
        tipo: "galaxia",
        stock: 15,
    },
    {
        title: "Seymour",
        desc: "Seymour, una planta de elegancia única con hojas lisas. Requiere cuidados mínimos y es perfecta para interiores.",
        img: "/images/3.jpg",
        price: "$10.00",
        tipo: "lisa",
        stock: 5,
    },
    {
        title: "Bonnie",
        desc: "Bonnie, una planta vintage con encanto nostálgico que añadirá un toque retro y cálido a tu hogar.",
        img: "/images/4.jpg",
        price: "$5.30",
        tipo: "vintage",
        stock: 10,
    },
    {
        title: "Líria",
        desc: "Líria, una planta clásica de aspecto atemporal, ideal para decorar cualquier rincón de tu hogar con su belleza.",
        img: "/images/5.jpg",
        price: "$15.70",
        tipo: "clasic",
        stock: 20,
    },
    {
        title: "O.J.",
        desc: "O.J., una planta luminosa que iluminará tu espacio. Fácil de cuidar, es perfecta para cualquier rincón de tu hogar.",
        img: "/images/6.jpg",
        price: "$8.00",
        tipo: "luminosa",
        stock: 12,
    },
    {
        title: "Spooky",
        desc: "Spooky, una planta con un toque misterioso que añadirá intriga y singularidad a tu hogar.",
        img: "/images/7.jpg",
        price: "$7.50",
        tipo: "luminosa",
        stock: 7,
    },
    {
        title: "Freya",
        desc: "Freya, una planta luminosa con un toque especial, ideal para crear un ambiente cálido y acogedor en tu hogar.",
        img: "/images/8.jpg",
        price: "$12.20",
        tipo: "luminosa",
        stock: 18,
    },
];

const ProductCard = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {list.map((item, index) => (
                <div key={index} className="flex flex-col rounded shadow-md p-4 transition-transform transform hover:scale-105">
                    <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover mb-4">
                        <img src={item.img} alt={item.title} className="rounded-lg w-full h-full object-cover" />
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
            ))}
        </div>
    );
};

export default ProductCard;