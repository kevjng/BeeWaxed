"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div> 
      <nav className="w-full bg-black top-0 fixed top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100"
                  height="100"
                  alt={"logo"}
                  src={"/images/logo.png"}
                />
              </Link>
              {/* MENU HAMBURGUESA PARA MOVIL */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/images/close.svg" width={30} height={30} alt="close" />
                  ) : (
                    <Image
                      src="/images/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-yellow-900  border-yellow-900  md:hover:text-yellow-400 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-600  border-yellow-900  md:hover:text-yellow-400 md:hover:bg-transparent">
                  <Link href="/nosotros" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-600  border-yellow-900  md:hover:text-yellow-400 md:hover:bg-transparent">
                  <Link href="/contacto" onClick={() => setNavbar(!navbar)}>
                    Contacto
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-600  border-yellow-900  md:hover:text-yellow-400 md:hover:bg-transparent">
                  <Link href="/tienda/all" onClick={() => setNavbar(!navbar)}>
                    Tienda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;