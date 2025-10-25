import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <div className='flex gap-120 mx-10 mt-14  '>
      {/* logo and name*/}
       <div className='flex  gap-2'>
        <Image src={`/logo.png`} alt='' width={48} height={48} className='logo-shadow'/>
        <h1 className='inter font-black text-[1.75rem] pt-0.5'>FloraVision.</h1>
       </div>

       {/* menu list*/}
       <nav>
        <div className='flex gap-120 pt-3'>
          <ul className='flex items-center gap-8 text-2xl indie font-normal '>
          <li><a href="#home">Home</a></li>
          <li className='flex items-center gap-2'>
            <a href="#plants-type">Plants Type</a>
            <Image src="/arrowdown.png" alt="" width={15} height={7}/>
          </li>
          <li><a href="#more">More</a></li>
          <li><a href="#contact">Contact</a></li>
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
