

const layoutTienda = ({ children }) => {
  return (
    <div className="container mt-20 py-4 px-4 rounded-xl bg-gray-900">

      <h2 className="text-yellow-300 font-bold">Este es el layout de Tienda
      </h2>
      <hr className="mt-2"/>

      {children}

    </div>
  )
}

export default layoutTienda