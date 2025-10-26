import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { ChevronRight } from 'lucide-react'

const Heroplant = () => {
  return (
    <div>
      <Image src={`/plant1.png`} alt='' width={459} height={459} className="w-[28.688rem] h-[28.688rem]" />
      
      <div>
        <div>
        <h2>Indoor plant</h2>
        <h1>Aglaonema plant</h1>
        <Button />
      </div>
      <div>
        <ChevronRight />
      </div>
      <h1>...</h1>
      </div>
    </div>
  )
}

export default Heroplant
