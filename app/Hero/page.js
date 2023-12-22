import Link from "next/link";
import Boton from "../components/ui/Boton";

const page = () => {
  return (
      <section id="hero" className="container my-60 md:px-8 rounded-3xl items-center">
          <div className="text-center text-white">
              <h1 className="text-5xl font-extrabold mb-4">Bienvenido a BeeWaxed</h1>
              <p className="text-lg">Descubre nuestra colección única de productos sostenibles y amigables con el medio ambiente.</p>
              <Link href="/productos/todos">
                  <div className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-full inline-block hover:bg-yellow-600 transition-all">Explorar Tienda</div>
              </Link>
          </div>
      </section>
  )
}

export default page