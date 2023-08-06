import React from 'react'
import Image from 'next/image'


//Importing Image Assets 
import hero from '../../../public/assets/hero.jpg'



const Hero = () => {
  return (
    <div className=' flex justify-between'>

        {/* left side */}
        <div className='w-[50%] flex flex-col items-start justify-center'>
            <h2 className='text-6xl font-bold'>Triple Gems Construction</h2>
            <p className='text-xl font-normal text-slate-600'>Renovations made simpler & approchable</p>
        </div>

        {/* right side */}

        <div style={{backgroundImage : `url('../../../public/assets/hero.jpg)`}} className='w-[50%] '>
                <h2>hello</h2>
        </div>
    </div>
  )
}

export default Hero