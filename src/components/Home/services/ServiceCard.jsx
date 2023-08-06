import Image from 'next/image'
import React from 'react'


//Importing Image Assets 
import CardImage from '../../../../public/assets/hero.jpg'





const ServiceCard = () => {
  return (
    <div className='px-8 py-2'>
        <Image src={CardImage} />
        <h6>{'Card Title'}</h6>
        <p>{'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem '}</p>
    </div>
  )
}

export default ServiceCard