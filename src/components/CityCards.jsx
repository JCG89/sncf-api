import React, {useState} from 'react'
import stations from "../gares.json"
import CityCard from './CityCard'

const CityCards = () => {

  let data = Object.keys(stations)

 const [cities, setCities ]= useState(data) 


  return (
    <div className='city-cards'>
     {cities.map((city)=>{
      return <CityCard key = {city} city = {city} />
     })}
    </div>
  )
}

export default CityCards