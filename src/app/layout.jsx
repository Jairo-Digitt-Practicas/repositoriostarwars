import './globals.css'
import Navigation from '../../components/Navigation'


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

