import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link><br />
        <Link href="/about">About</Link><br />
        <Link href="/products">Products</Link>
      </nav>
    </div>
  )
}

export default Navbar
