import { db } from "../../../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

import GoBack from "../../../components/ui/GoBack"

import ProductDetail from "../../../components/products/ProductDetail"

import Image from "next/image"


const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `BeeWaxed - ${params.id}`,
    }
}

export async function generateStaticParams() {
    return [
        { id: 'Yummy' },
        { id: 'Asensia' },
        { id: 'Seymour' },
        { id: 'Bonnie' },
        { id: 'Liria' },
        { id: 'O.J.' },
        { id: 'Spooky' },
        { id: 'Freya' },
    ]
}


const Detail = async ({ params }) => {
    const { id } = params

    const item = await getProduct(id)
    console.log(item)

    return (
        <div className="container m-auto mt-24 ">

            {/* <h2 className="text-4x1 text-bold text-yellow-300 my-4">Detalle de Producto</h2> */}

            < div className="container my-24 mx-auto md:px-6" >

                <section className="mb-32">

                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <GoBack></GoBack>

                                <div
                                    className="relative z-[1] block rounded-lg bg-[#333333] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-sm bg-white/25 hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-500 hover:shadow-cyan-500/50">
                                    <h2 className="mb-8 text-3xl font-bold ">{item.title}</h2>
                                    <p className="mb-8 pb-2 text-neutral-200 dark:text-neutral-300 lg:pb-0">
                                        {item.desc}
                                    </p>

                                    <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="green" className="mr-2 h-5 w-5">
                                                <path
                                                    d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z">
                                                </path>
                                                <path fillRule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            Precio: $ {item.price}
                                        </p>

                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="blue" className="mr-2 h-5 w-5">
                                                <path
                                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                                                </path>
                                                <path
                                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                                                </path>
                                            </svg>
                                            Stock: {item.stock}
                                        </p>

                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="yellow" className="mr-2 h-5 w-5">
                                                <path fillRule="evenodd"
                                                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                    clipRule="evenodd">
                                                </path>
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
                                    src={`${item.img}`}
                                    width={500}
                                    height={500}
                                    className="w-full rounded-3xl" />
                            </div>

                            <ProductDetail item={item} />

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

