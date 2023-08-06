import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Importing Image Assets 
import logo from '../../../public/assets/tgc_logo.svg'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-center items-center'>
            <Link href={"/work"}><li className='px-8 py-2'>Our Work</li></Link>
            <Link href={"/"}><Image src={logo} alt='TGC Logo'  style={{width:'auto',height : '90px'}}/></Link>
            <Link href={"/contact"}><li className='px-8 py-2'>Contact Us</li></Link>
        </ul>
    </div>
  )
}

export default Navbar