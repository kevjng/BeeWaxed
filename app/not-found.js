'use client'

import { Button, Image } from "@nextui-org/react"
import { useRouter } from "next/navigation"

const NotFound = () => {

const router = useRouter()

  return (
      <div className="my-20">
          
          Pagina no encontrada
          
          <hr className="my-4" /> 

          <Image
              src="/images/logo.png"
              width={500}
              height={500}
              alt="Picture of the author"
          />

          <Button onClick={()=> router.back()}>Volver</Button>
          
    </div>
    
  )
}

export default NotFound
