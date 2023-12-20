import Nosotros from "../app/nosotros/page"
import Contacto from "./contacto/page"
import Tienda from "../app/components/products/ProductCard"

export const metadata = {
  title: 'BeeWaxed - Página inicio',
  description: 'App de BeeWaxed 2023',
  keywords: ['BeeWaxed', 'Plantas', 'Gorras', 'Llaveros'],
  openGraph: {
    title: 'BeeWaxed - Página inicio',
    description: 'App de BeeWaxed 2023',
    type: 'article',
    authors: ['kvj'],
  }
}



export default function Home() {
  return (

   
      <div className="container">

        <section
          id="Inicio"
          className="text-white h-screen bg-black text-center flex"
        >
          <h1 className="m-auto font-waterfall text-7xl text-yellow-600 font-bold ">
            Inicio
          </h1>
        </section>

        <section id="nosotros" className=" text-white flex ">
          <div className="">
            <Nosotros />
          </div>
        </section>


      <section id="contacto" className="">
          <div className="">
            <Contacto />
          </div>
        </section>

      
      <div className="container">
        <section id="tienda" className="text-white h-screen bg-green-950 text-center flex">

          {/* <Tienda/> */}

        </section>

      </div>

      </div>
    



  )
}
