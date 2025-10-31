import React from 'react'
import O2SectionTitle from './UI/O2SectionTitle'


// interface plant{
//   id: number;
//   name: string;
//   desc: string;
//   image: string;
// }

// const PlantData: plant[] = [
//   {
//     id: 1,
//     name: "Aglaonema",
//     desc: " afwagwagwagwagawgaw",
//     image: " /feagaegagaeg",
//   }
// ]


const O2Section = () => {
  return (
   <>
    <section className="min-h-screen px-4 sm:px-8 border-t-2 lg:px-20 py-20 text-white ">
        <div className="flex  justify-center">
          <O2SectionTitle>Our Best o2</O2SectionTitle>
        </div>
    </section>
   </>
  )
}

export default O2Section
