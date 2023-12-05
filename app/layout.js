import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"

import { CartProvider } from '../contexts/CartContext'
import { AuthProvider } from '../contexts/AuthContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BeeWaxed',
  description: 'Pagina oficial de BeeWaxed',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">

      <body className={inter.className}>

       {/*  <AuthProvider> */}
          <CartProvider>

            <div className="flex items-start justify-center">
              <Navbar className="my-20"></Navbar>
              {children}
            </div>

            <Footer className="mt-20"></Footer>

          </CartProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}
