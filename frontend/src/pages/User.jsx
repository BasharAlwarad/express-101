import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const {id}=useParams()
  const [user, setUser] = useState(null)

  const getSingleUser =async (id) => { 
try {
  const {data}=await axios.get(`http://localhost:8000/api/v1/users/${id}`)
  setUser(data[0])
} catch (error) {
  console.log(error.message)
}
   }

   useEffect(() => {
     getSingleUser(id)
   }, [id])
   
  
  return (
    <div>
      {
        user && (
          <div>
            <h1>{user?.name}</h1>
          </div>
        )
      }
    </div>
  )
}

export default User