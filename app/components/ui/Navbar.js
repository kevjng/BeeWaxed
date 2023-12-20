"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { IconButton } from "@material-tailwind/react";

import CartWidget from "../../components/ui/CartWidget"

const links = [
  { label: "Inicio", href: "/", },
  { label: "Nosotros", href: "/nosotros", },
  { label: "Contacto", href: "/contacto", },
  { label: "Tienda", href: "/productos/todos", },
  { label: "Admin", href: "/admin", },
  
];

function NavBar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black top-0 fixed left-0 right-0 z-50 opacity-90">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  shadow="sm"
                  radius="lg"
                  width={110}
                  height={110}
                  alt={"logo"}
                  src={"/images/logo.png"}
                  className={"hover:translate-x-1 hover:translate-y-1 hover:rotate-2 hover:scale-110 transition-all"}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  priority={"100"}
                />
              </Link>
              {/* MENU HAMBURGUESA PARA MOVIL */}
              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md outline-none transition ease-in-out hover:scale-80 duration-100 "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/images/close.svg"
                      width={30}
                      height={30}
                      alt="close"
                      className="focus:border-none active:border-none translate:-1"
                    />
                  ) : (
                    <Image
                      src="/images/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none "
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
                
                {links.map((link) => (
                  <li
                    key={link.label}
                    className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-yellow-500  border-yellow-600  md:hover:text-yellow-400 md:hover:bg-transparent hover:translate-y-1 transition-all"
                  >
                    <Link
                      onClick={() => setNavbar(!navbar)}
                      href={link.href}
                      className={`${pathname === link.href
                        ? "font-semibold text-yellow-300 translate-x-2"
                        : ""} py-2 hover:translate-y-2 transition-all`}
                    >
                      
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li onClick={() => setNavbar(!navbar)} className='pb-6 text-xl text-white py-2 px-6 border-b-2 md:border-b-0  hover:bg-green-500  border-green-600  md:hover:text-yellow-400 md:hover:bg-transparent hover:translate-y-1 transition-all flex justify-center'>
                  <CartWidget ></CartWidget>
                </li>
              </ul>
              <ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;