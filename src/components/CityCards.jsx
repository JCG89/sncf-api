// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import stations from "../gares.json"
import CityCard from './CityCard'

const CityCards = () => {

 // eslint-disable-next-line no-unused-vars
 const [cities, setCities ]= useState(Object.keys(stations)) 


  return (
    <div className='city-cards'>
     {cities.map((city)=>{
      return <CityCard key = {city} city = {city} />
     })}
    </div>
  )
}

export default CityCards