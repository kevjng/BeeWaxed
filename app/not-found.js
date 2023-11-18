'use client'

import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">¡Página no encontrada!</h1>
      <p className="text-gray-600 mb-8 text-center">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Image
        src="/images/logo.png"
        width={400}
        height={400}
        alt="Logo de la empresa"
        className="rounded-lg"
      />
      <Button
        onClick={() => router.back()}
        className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        Volver
      </Button>
    </div>
  );
};

export default NotFound;
