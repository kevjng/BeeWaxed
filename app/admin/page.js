import React from 'react';
/* import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'; */

import LogoutButton from "../components/admin/LogoutButton"
import ProductsTable from "../components/admin/ProductsTable"


const Admin = () => {
/*   const productList = [
    {
      title: "Yummy",
      desc: "Una planta de aspecto exquisito, fácil de cuidar y perfecta para iluminar cualquier rincón de tu hogar.",
      img: "/images/products/1.jpg",
      price: "$5.50",
      tipo: "luminosa",
      stock: 8,
    },
    {
      title: "Asensia",
      desc: "Asensia, una planta con un toque galáctico que aporta un aspecto único y fascinante. Ideal para los amantes de la astronomía.",
      img: "/images/products/2.jpg",
      price: "$3.00",
      tipo: "galaxia",
      stock: 15,
    },
    {
      title: "Seymour",
      desc: "Seymour, una planta de elegancia única con hojas lisas. Requiere cuidados mínimos y es perfecta para interiores.",
      img: "/images/products/3.jpg",
      price: "$10.00",
      tipo: "lisa",
      stock: 5,
    },
    {
      title: "Bonnie",
      desc: "Bonnie, una planta vintage con encanto nostálgico que añadirá un toque retro y cálido a tu hogar.",
      img: "/images/products/4.jpg",
      price: "$5.30",
      tipo: "vintage",
      stock: 10,
    },
    {
      title: "Líria",
      desc: "Líria, una planta clásica de aspecto atemporal, ideal para decorar cualquier rincón de tu hogar con su belleza.",
      img: "/images/products/5.jpg",
      price: "$15.70",
      tipo: "clasic",
      stock: 20,
    },
    {
      title: "O.J.",
      desc: "O.J., una planta luminosa que iluminará tu espacio. Fácil de cuidar, es perfecta para cualquier rincón de tu hogar.",
      img: "/images/products/6.jpg",
      price: "$8.00",
      tipo: "luminosa",
      stock: 12,
    },
    {
      title: "Spooky",
      desc: "Spooky, una planta con un toque misterioso que añadirá intriga y singularidad a tu hogar.",
      img: "/images/products/7.jpg",
      price: "$7.50",
      tipo: "luminosa",
      stock: 7,
    },
    {
      title: "Freya",
      desc: "Freya, una planta luminosa con un toque especial, ideal para crear un ambiente cálido y acogedor en tu hogar.",
      img: "/images/products/8.jpg",
      price: "$12.20",
      tipo: "luminosa",
      stock: 18,
    },
  ]; */

  return (
    <div className="container mx-auto my-28">
      <h1 className="text-4xl font-bold mb-8 text-center ">Panel de Administración</h1>
      {/* <div className="bg-gray-100 p-8 rounded-md shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Imagen</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Nombre</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Descripción</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Precio</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Tipo</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Stock</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-black uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productList.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-4 px-6 whitespace-nowrap text-black">
                  <img src={product.img} alt={product.title} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="py-4 px-6 text-black">{product.title}</td>
                <td className="py-4 px-6 text-black">{product.desc}</td>
                <td className="py-4 px-6 text-black">${product.price}</td>
                <td className="py-4 px-6 text-black">{product.tipo}</td>
                <td className="py-4 px-6 text-black">
                  {product.stock}
                </td>
                <td className="py-4 px-6 text-black flex items-center space-x-3">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" alt="Agregar">
                    <FaPlus />
                  </button>
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300" alt="Editar">
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300" alt="Eliminar">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <LogoutButton /> */}
      <ProductsTable />





    </div>
  );
};

export default Admin;

