
import NavBar from "./components/ui/navbar/Navbar";
import Tienda from "./tienda/[categoria]/page";
import Contacto from "./contacto/page";



export const metadata = {
  title: 'BeeWaxed - Página inicio',
  description: 'App de BeeWaxed 2023',
  keywords: ['BeeWaxed','Plantas','Gorras', 'Llaveros'],
  openGraph: {
    title: 'BeeWaxed - Página inicio',
    description: 'App de BeeWaxed 2023',
    type: 'article',
    authors: ['kvj'],
  }

}
  


export default function Home() {
  return (
     
      <div className="text-center">
        <NavBar />
        <section
          id="Blog"
          className="text-white h-screen bg-black text-center flex"
        >
          <h1 className="m-auto font-waterfall text-7xl text-yellow-600 font-bold  ">
            Blog
          </h1>
        </section>
        <section id="nosotros" className=" text-white h-screen bg-yellow-900 flex">
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
            Nosotros
          </h1>
        </section>
        <div>
        <section
          id="contacto"
          className="text-white h-screen bg-black text-center flex"
        >
          <h1 className="m-auto font-waterfall text-7xl text-yellow-600 font-bold">
            Contacto{' '}
          </h1>
          </section>
          <Contacto/>
        </div>
        <section
          id="tienda"
          className="text-white bg-yellow-400 flex"
        >
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
            Tienda
            <Tienda/>
          </h1>
        </section>
      </div>
     
      

  )
}
