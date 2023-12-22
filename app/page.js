import Nosotros from "../app/nosotros/page";
import Contacto from "./contacto/page";
import Tienda from "../app/productos/detail/loading";
import Hero from "../app/Hero/page"

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
};

export default function Home() {
  return (
    <div className="container">

      {/* Sección Hero */}
      <Hero/>

      {/* Sección Nosotros */}
      <section id="nosotros" className="text-white flex">
        <div className="">
          <Nosotros />
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="">
        <div className="">
          <Contacto />
        </div>
      </section>

      {/* Sección Tienda */}
      <section id="tienda" className="">
        <div className="">
          <Tienda />
        </div>
      </section>

    </div>
  );
}