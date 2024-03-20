import {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { calculateDelay, getFullMinutes, parseUTCDate } from './utils'
import Origine from './Origine'

const Arrivals = () => {
  const {codeStation} = useParams()
 const[nexArrivals, setNextArrivalls] = useState([])

 useEffect(()=>{

   const fetchArrivals = async()=>{

    // eslint-disable-next-line no-unused-vars
    const response = await axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/arrivals`,
    {
      headers:{
        Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`
      }
    }
    ).then((response)=>{

      const arrivals = response.data.arrivals.map(
        (arrival)=>({
          id:arrival.links[1].id ,
          operator: '',
          transportationMode: arrival.display_informations.network,
          trainNumber: arrival.display_informations.headsign,
          baseArrivalTime: parseUTCDate(arrival.stop_date_time.arrival_date_time),
          realArrivalTime : parseUTCDate(arrival.stop_date_time.arrival_date_time)
        })
      )
      setNextArrivalls(arrivals)
    })    
   }
   fetchArrivals()
 },[codeStation])
  
 const [isTimeDisplayed, setIsTimeDisplay] = useState(true)
 useEffect(()=>{

  const interval = setInterval(()=>{

    setIsTimeDisplay((prevIsTimeDisplay)=>!prevIsTimeDisplay)
  }, 5000)

   return ()=>{
    clearInterval(interval)
   }
 },[])
  return (
    <div className='arrivals'>
     {/* Affichage des arrivés*/}
    {nexArrivals.map((arrival, index)=>(
      <div key = {arrival.id} className={`arrival ${index % 2 ? '': 'arrival--light'}`} >

          <p className='arrival__operator'>{arrival.operator}</p>
          <p className='arrival__train-type'>{arrival.transportationMode}</p>
          <p className='arrival__train-number'>{arrival.trainNumber}</p>
          <p className={`arrival__time ${isTimeDisplayed ? '': 'arrval__time--disappear'}`}>
          {arrival.baseArrivalTime.getHours()}h{getFullMinutes(arrival.baseArrivalTime)}
          </p>
            {/* Affichage des retards*/}
            <p className= {`arrival__delay ${isTimeDisplayed ? 'arrival__delay--disappear':''}`}>
            {calculateDelay(arrival.baseArrivalTime, arrival.realArrivalTime)}
            </p>
            <Origine idArrival = {arrival.id}/>
      </div>
    ))}
    </div>
  )
}

export default Arrivals