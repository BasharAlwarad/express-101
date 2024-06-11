import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Users = () => {
  const [users, setUsers] = useState([])

  const getAllUsers =async () => { 
    try {
      const {data}=await axios.get(`http://localhost:8000/api/v1/users`)
      setUsers(data)
      
    } catch (error) {
      console.log(error.message)
    }
   }

   useEffect(() => {
     getAllUsers()
   
   }, [])
   

  return (
    <div>
{
  users?.map((user)=>(
    <div key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </div>
  ))
}
    </div>
  )
}

export default Users