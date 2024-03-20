import {useState, useEffect} from 'react'
import axios from 'axios'
import propTypes from 'prop-types'

const Origine = ({idArrival}) => {
  const [stops, setStops] = useState([])

  useEffect(()=>{

     const fetchStops = async()=>{
      const response = await axios.get(`https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${idArrival}`,
      {
        headers:{
          Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`
        }
      }
      ).then(( response)=>{

        const stopApi = response.data.vehicle_journeys[0].stop_times.map(
          (stop)=>stop.stop_point.name
        )
        setStops(stopApi)
      })

     }
     fetchStops()

  },[])
  return (
    <>
    <p className='arrival__origin'>{stops[0]}</p>
    <div className='arrival__stops'>
      <ul className='stops'>
        {stops.map((stop, index)=>(
          <li className='stops__station' key = {stop}>
            {stop}
            <img src = '/images/yellow.jpg' alt ='yellow-point'
             style ={{display: `${index === stops.length -1 ? 'none': 'inline' }`}}
            />
          </li>
        ))}
      </ul>
    </div>
    </> 
  )
}
Origine.propTypes={
  idArrival: propTypes.string.isRequired
}

export default Origine