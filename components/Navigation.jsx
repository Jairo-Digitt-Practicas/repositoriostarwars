import Link from 'next/link'

function Navigation() {
  return (
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/personajes">Personajes</Link>
          </li> 
          <li>
            <Link href="/especies">Especies</Link>
          </li> 
          <li>
            <Link href="/benefactores">Benefactores</Link>
          </li>
        </ul>

  )
}

export default Navigation;