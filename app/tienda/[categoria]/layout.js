import Link from "next/link"


const layoutTienda = ({ children }) => {
  return (
    <div className="container mt-20 py-6 px-4 rounded-xl bg-gray-900">

      <h2 className="text-yellow-300 font-bold my-6">
        
        Este es el layout de Tienda

      </h2>
      <nav className="flex gap-10">
        <Link href="/tienda/all">Todos</Link>
        <Link href="/tienda/luminosa">Luminosas</Link>
        <Link href="/tienda/galaxia">Galaxia</Link>
        <Link href="/tienda/lisa">Lisa</Link>
        <Link href="/tienda/vintage">Vintage</Link>
        <Link href="/tienda/clasic">Clasic</Link>
      </nav>

      <hr className="mt-2"/>

      {children}

    </div>
  )
}

export default layoutTienda