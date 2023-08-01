import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <div className="nav-container-navigation">
      <ul>
        <li className="nav-item-navigation">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item-navigation">
          <Link href="/personajes">Personajes</Link>
        </li>
        <li className="nav-item-navigation">
          <Link href="/especies">Especies</Link>
        </li>
        <li className="nav-item-navigation">
          <Link href="/benefactores">Benefactores</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
