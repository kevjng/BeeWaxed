import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

import GoBack from "../../../components/ui/GoBack"
import Image from "next/image"

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: `BeeWaxed - ${params}`,
    }
}


const Detail = async ({ params }) => {
    const { id } = params

    const item = await getProduct(id)
    console.log(item)

    return (
        <div className="container m-auto mt-24">

            {/* <h2 className="text-4x1 text-bold text-yellow-300 my-4">Detalle de Producto</h2> */}

            < div className="container my-24 mx-auto md:px-6" >

                <section className="mb-32">

                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <GoBack></GoBack>
                                <div
                                    className="relative z-[1] block rounded-lg bg-[#333333] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-8 text-3xl font-bold">{item.title}</h2>
                                    <p className="mb-8 pb-2 text-neutral-200 dark:text-neutral-300 lg:pb-0">
                                        {item.desc}
                                    </p>

                                    <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                        <p classname="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Precio: $ {item.price}
                                        </p>

                                        <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Stock: {item.stock}
                                        </p>

                                        <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Tipo: {item.tipo}
                                        </p>
                                    </div>

                                    <p className="mb-0 text-neutral-400 dark:text-neutral-200">
                                        In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                                        pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                                        sed cursus lectus. Proin non rutrum magna. Proin gravida,
                                        justo et imperdiet tristique, turpis nisi viverra est, nec
                                        posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                                        condimentum nulla, ut aliquet erat auctor sed. Aenean
                                        facilisis neque id ligula maximus scelerisque. Nunc sed velit
                                        rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                                        viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                                        aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                                        Quisque congue turpis quis libero ullamcorper imperdiet.
                                        Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                                        et lectus sit amet neque luctus viverra.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <Image
                                    alt={item.title}
                                    src={`/images/products/${item.slug}.jpg`}
                                    width={500}
                                    height={500}
                                    className="w-full rounded-3xl"/>

                            </div>
                        </div>
                    </div>

                </section>

            </div >



            <div>


            </div>
        </div>
    )
}

export default Detail

