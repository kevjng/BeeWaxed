"use client"

import { Button, Image } from "@nextui-org/react";


const Error = ({ error, reset }) => {
    console.log({ error })

    return (

  <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center">Hubo un error al cargar la página</h1>
      <p className="text-gray-600 mb-8 text-center">
                {error.message}
      </p>
      <Image
        src="/images/logo.png"
        width={400}
        height={400}
        alt="Logo de la empresa"
        className="rounded-lg"
      />
      
            
            <Button onClick={reset}>Intentar nuevamente</Button>
        
    </div>
    )
}

export default Error