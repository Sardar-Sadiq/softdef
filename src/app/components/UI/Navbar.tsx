"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  const menuItems = [
    {name: 'Home', href: '#home', hasDropdown: false},
    {name: 'Plants Type', href: '#plants-type', hasDropdown: true},
    {name: 'More', href: '#more', hasDropdown: false},
    {name: 'Contact', href: '#contact', hasDropdown: false},
  ]


  return (
    <>
    <div className='flex  mt-6 w-full items-center justify-between mx-auto px-4 sm:px-8 lg:px-10 py-6 md:py-8 bg-transparent text-white'>
      {/* logo and name*/}
       <div className='flex shrink-0 items-center z-10 gap-2'>
        <Image src={`/logo.png`} alt='' width={48} height={48} className='logo-shadow w-12 h-12'/>
        <h1 className='inter font-black text-[1.75rem] pt-0.5'>FloraVision.</h1>
       </div>

       {/* menu list*/}
       <nav>
        <div className='flex gap-120 pt-3'>
          <ul className='flex items-center gap-10 text-2xl font-normal indie'>
          {menuItems.map((item) => (
            <li key={item.name} className='group relative'>
                <a href={item.href} onClick={() => setIsMenuOpen(false)} className='hover:opacity-70'>{item.name}</a>
                {item.hasDropdown && (
                  <Image src="/arrowdown.png" alt="" width={15} height={7} className='inline-block ml-2 w-4 h-2'/>
                )}
            </li>
          ))}
          </ul>
        <ul className='pl-14 flex items-center gap-8'>
          <li>
            <Image src="/search-icon.png" alt='' width={26} height={26}></Image>
          </li>
          <li>
            <Image src="/bag-icon.png" alt='' width={26} height={26}></Image>
          </li>
          <div className="flex flex-col items-end gap-y-2 ">
            
              <div 
                className="  h-0 border-t-4 border-white rounded-sm transition-allduration-300 ease-in-out w-[31px]" />

              <div 
                className="h-0 border-t-4 border-white rounded-sm transition-opacity duration-300 ease-in-out w-[23px]"/>

          </div>
        </ul>
        </div>
       </nav>
    </div>
    </>
  )        
} 

export default Navbar 
