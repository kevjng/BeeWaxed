"use client"

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { useState } from "react"
import Boton from "../components/ui/Boton"
import ContactForm from "../contacto/ContactForm"



const Contacto = () => {
  const placements = [
    "inside",
    "outside",
    "outside-left",
  ];


  return (
    <div className="container">


      <div className="container my-20 md:px-8 rounded-3xl">
        <div className="p-8 rounded-md justify-center text-center">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mt-20">Contactanos</h2>
            <p class="mt-2 text-lg leading-8 text-gray-400">Nos pondremos en contacto a la velocidad de la luz.</p>
          </div>
        </div>
    <ContactForm></ContactForm>
        <div className="flex flex-col gap-2">
          <h3 className="text-default-400 text-large">
            Datos de contacto:
          </h3>
          <form className="flex flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 mx-4">

            <Input
              type="text"
              label="Nombre"
              labelPlacement={"inside"}
              description={"Ingresa tu Nombre"}
              className="my-4"
            />
            <Input
              type="email"
              label="Email"
              labelPlacement={"inside"}
              description={"Ingresa tu email"}
              className="my-4"
            />
            <Input
              type="text"
              label="Numero"
              labelPlacement={"inside"}
              className="my-4"
              description={"Ingresa tu Numero"}
            />

          </form>

          <h3 className="text-default-400 text-large">
            Mensaje:
          </h3>

          <div className="flex my-2 mx-4">
            <Textarea
              label="Dejanos tu mensaje"
              placeholder=""
              className="my-4"
            />
          </div>
          <div className="my-2 flex justify-end">
            <Button size="lg" shadow color="danger" className="text-white">
              Borrar
            </Button>
            <Button type="submit" size="lg" shadow color="warning" className="text-white mx-4">
              Enviar
            </Button>

          </div>
        </div>
      </div>

      <div class="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/5 rotate-[60deg] bg-gradient-to-tr from-[#ff80b5] to-[#c5ab06] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
        </div>
      </div>



    </div>
  )
}

export default Contacto


