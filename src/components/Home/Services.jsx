import React from 'react'
import ServiceCard from './services/ServiceCard'

const Services = () => {
  return (
    <div>

        <h3>Our Services</h3>

        <div className='flex'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />


        </div>
    </div>


  )
}

export default Services