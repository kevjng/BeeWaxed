import React from 'react';

const Nosotros = () => {
  return (
    <>
       <div class="container my-24 mx-auto md:px-6 bg-slate-900 rounded-3xl">

        <div className="p-8 rounded-md justify-center text-center">
          <h1 className="text-3xl font-bold text-white my-14">Sobre Nosotros</h1>
          <p className="text-gray-400 mb-4">
            Bienvenido a nuestro sitio web. En "Nosotros", nos apasiona ofrecer las mejores plantas para tu hogar. Con una amplia variedad de opciones, desde plantas luminosas hasta plantas vintage, estamos seguros de que encontrarás la planta perfecta para dar vida a tu espacio.
          </p>
          <p className="text-gray-400 mb-4">
            Nuestro equipo está formado por entusiastas de las plantas que se esfuerzan por proporcionar productos de calidad y un servicio excepcional. Cada planta que ofrecemos ha sido cuidadosamente seleccionada y cultivada para asegurar su salud y belleza.
          </p>
          <p className="text-gray-400">
            ¡Gracias por confiar en nosotros para traer un pedacito de naturaleza a tu hogar!
          </p>
        </div>
        
        <section class="mb-32">
          <h1 className="text-3xl font-bold text-white text-center my-14">Nuestro equipo</h1>

          
          <div class="mb-12 flex flex-wrap md:mb-0">
            <div class="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).jpg"
                class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
            </div>

            <div class="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
              <p class="mb-3 font-semibold">Marta Dolores</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio est ab iure inventore dolorum consectetur? Molestiae
                aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                nam, soluta distinctio quis accusantium!
              </p>
            </div>
          </div>

        
          <div class="mb-12 flex flex-wrap md:mb-0">
            <div class="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(25).jpg"
                class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
            </div>

            <div class="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
              <p class="mb-3 font-semibold">Valeria Groove</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio est ab iure inventore dolorum consectetur? Molestiae
                aperiam atque quasi consequatur aut? Repellendus alias dolor ad
                nam, soluta distinctio quis accusantium!
              </p>
            </div>
          </div>

          
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/12 shrink-0 grow-0 basis-auto">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).jpg"
                class="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Avatar" />
            </div>

            <div class="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
              <p class="mb-3 font-semibold">Antonia Velez</p>
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
    </>
  );
};

export default Nosotros;
