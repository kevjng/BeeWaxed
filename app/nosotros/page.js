import React from 'react';

export const metadata = {
  title: 'BeeWaxed - Nosotros',
  description: 'App de BeeWaxed 2023',
  
  openGraph: {
    title: 'BeeWaxed - Nosotros',
    description: 'App de BeeWaxed 2023',
    type: 'article',
    authors: ['kvj'],
  }
};

const Nosotros = () => {



  return (
      <div className="container my-20 md:px-8 rounded-3xl">
        <div className="p-8 rounded-md justify-center text-center">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mt-20 mb-10">Sobre Nosotros</h2>

            <p className="mt-2 text-lg leading-8 text-gray-400">Bienvenido a nuestro sitio web. En BeeWaxed, nos apasiona ofrecer las mejores plantas para tu hogar. Con una amplia variedad de opciones, desde plantas luminosas hasta plantas vintage, estamos seguros de que encontrarás la planta perfecta para dar vida a tu espacio.</p>


            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl my-10">Equipo BeeWaxed</h2>

            <p className="text-gray-400 mb-4 leading-8">
              Nuestro equipo está formado por entusiastas de las plantas que se esfuerzan por proporcionar productos de calidad y un servicio excepcional. Cada planta que ofrecemos ha sido cuidadosamente seleccionada y cultivada para asegurar su salud y belleza.
            </p>
            <p className="text-gray-400 leading-8">
              ¡Gracias por confiar en nosotros para traer un pedacito de naturaleza a tu hogar!
            </p>
          </div>

          <div className="container mx-auto w-3/3">

            <section className="mt-20 text-left mx-10">

              <div className="mb-12 flex flex-wrap md:mb-0">
                <div className="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).jpg"
                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
                </div>

                <div className="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
                  <p className="mb-3 font-semibold">Marta Dolores</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio est ab iure inventore dolorum consectetur? Molestiae
                    aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                    nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>


              <div className="mb-12 flex flex-wrap md:mb-0">
                <div className="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(25).jpg"
                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
                </div>

                <div className="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
                  <p className="mb-3 font-semibold">Valeria Groove</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio est ab iure inventore dolorum consectetur? Molestiae
                    aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                    nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>


              <div className="flex flex-wrap">
                <div className="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).jpg"
                    className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
                </div>

                <div className="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
                  <p className="mb-3 font-semibold">Antonia Velez</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio est ab iure inventore dolorum consectetur? Molestiae
                    aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                    nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
            </section>

          </div>




        </div>

      <div className="isolate bg-black px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#c5ab06] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>

      </div>

    
  );
};

export default Nosotros;
