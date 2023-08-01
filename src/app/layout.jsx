'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Repositorio Star Wars',
  description: 'Buscador de datos de personajes de Star Wars',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}

