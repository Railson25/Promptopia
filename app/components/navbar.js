"use client"

import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/images/logo.svg'


function Navbar() {
  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href='/' className="flex items-center gap-2">
        <Image 
          src={Logo}
          width={30}
          height={30}
          className="object-contain"
        /> 
        <p className="text-sm hover:text-gray-400 font-medium">
          Promptopia
        </p>
      </Link>
    </nav>
  )
}

export default Navbar