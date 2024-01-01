"use client"

import React from "react";
import ContactForm from "../contacto/ContactForm"



const Contacto = () => {
  
  return (
    <div className="container">


      <div className="container my-20 md:px-8 rounded-3xl">
        <div className="p-8 rounded-md justify-center text-center">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mt-20">Contactanos</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">Nos pondremos en contacto a la velocidad de la luz.</p>
          </div>
        </div>

      </div>
        <div className="mx-4">
          <ContactForm></ContactForm>
        </div>
        

      <div className="isolate bg-black px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/5 rotate-[60deg] bg-gradient-to-tr from-[#ff80b5] to-[#c5ab06] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>



    </div>
  )
}

export default Contacto


