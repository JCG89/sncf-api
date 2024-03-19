/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

const TrainStations = ({stations}) => {
  return (
    <div className='train-stations'>
    {Object.keys(stations).map((stationName)=>(
      <NavLink className={({isActive})=>
      `train-stations__link ${isActive?'train-stations__link':''}`}

      key = {stationName}
      to = {`${stations[stationName]}`}
      ><span>{stationName}</span></NavLink>
    ))}
    </div>
  )
}

TrainStations.propTypes = {
 stations: propTypes.object.isRequired
}

export default TrainStations