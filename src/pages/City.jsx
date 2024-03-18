
import { useParams } from 'react-router-dom'
const City = () => {

  const {city} = useParams()


  return (
    <div className='city'>{city}</div>
  )
}

export default City