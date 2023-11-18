
import * as React from "react";
import { Inter } from 'next/font/google'




import './globals.css'

import Navbar from "./components/ui/navbar/Navbar"



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BeeWaxed',
  description: 'Pagina oficial de BeeWaxed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      
      
        <div className="flex items-start justify-center">
        
          <Navbar className="my-20"></Navbar>
          {children}
        
          </div>
      
       
      </body>
    </html>
  )
}
