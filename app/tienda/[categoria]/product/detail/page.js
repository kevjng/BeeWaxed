

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: `BeeWaxed - ${params.categoria}`,
    }
}

const DetalleProducto = (params) => {

    console.log(params)

    const { categoria, id } = params

  return (
      <div>
          
          DetalleProducto
<hr/>
          Ruta:
          

          


      </div>
  )
}

export default DetalleProducto