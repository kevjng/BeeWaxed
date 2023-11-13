
"use client"

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";


const Contacto = () => {
  const placements = [
    "inside",
    "outside",
    "outside-left",
  ];


  return (
    <div className="container my-20 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-default-500 text-large">
          Formulario de contacto
        </h3>
        <form className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">

          <Input
            type="text"
            label="Nombre"
            labelPlacement={"inside"}
            description={"Ingresa tu Nombre"}
          />
          <Input
            type="email"
            label="Email"
            labelPlacement={"inside"}
            description={"Ingresa tu email"}
          />
          <Input
            type="text"
            label="Numero"
            labelPlacement={"inside"}
            description={"Ingresa tu Numero"}
          />
          
        </form>
        <div className="container flex mt-5">
          <Textarea
            label="Mensaje"
            placeholder="Dejanos tu mensaje"
            className="max-w-xs"
          />
        </div>
        <div className="container my-5">
          <Button size="lg" shadow color="warning">
            Enviar
          </Button>
          
        </div>
      </div>
    </div>

  )
}

export default Contacto


