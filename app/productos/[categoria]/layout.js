import Link from "next/link"


const layoutTienda = ({ children }) => {

  return (
    <div className="container my-20 md:px-8 bg-slate-00 rounded-3xl">

      <div className="p-8 rounded-md justify-center text-center">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mt-20">Bienvenidos a nuestra Tienda</h2>
          <p class="mt-2 text-lg leading-8 text-gray-400">Tus productos favoritos, nuestras creaciones.</p>
        </div>
      </div>

      
      {/* <nav className="flex flex-wrap gap-10 mx-4">
        <Link href="/tienda/todos" className="hover:text-yellow-300">Todos</Link>
        <Link href="/tienda/luminosas" className="hover:text-yellow-300">Luminosas</Link>
        <Link href="/tienda/galaxia" className="hover:text-yellow-300">Galaxia</Link>
        <Link href="/tienda/lisa" className="hover:text-yellow-300">Lisa</Link>
        <Link href="/tienda/vintage" className="hover:text-yellow-300">Vintage</Link>
        <Link href="/tienda/clasic" className="hover:text-yellow-300">Clasic</Link>
      </nav> */}

      {/* <hr className="my-2"/> */}

      {children}


      <div class="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute  top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#c5ab06] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>

    </div>
  )
}

export default layoutTienda