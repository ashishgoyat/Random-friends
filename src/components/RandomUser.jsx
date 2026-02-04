import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './RandomUser.css'

const RandomUser = () => {
  const [users, setUsers] = useState([])
  const [pagenum, setPagenum] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchusers = async () => {
      try{
        setLoading(true)
        const response = await axios.get(`https://randomuser.me/api?page=${pagenum}&results=7`)
        const newusers = await response.data.results
        setUsers((prevuser) => [...prevuser, ...newusers])
      }catch(err){
        console.error("Error while fetching",err)
      }finally{
        setLoading(false)
      }
    }
    fetchusers()
  },[pagenum])


  function loadusers(){
    setPagenum(pagenum + 1)
  }


  return (
    <div className='random-user-container'>
      <h1>Random Friends</h1>
        <div className='users-list'>
          {users.map((user, index) => (
            <div key={index} className='user-card'>
              <img src={user.picture.large} className='user-image' alt={user.name.first}/>
              <h2>{user.name.first} {user.name.last}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
        <button className='load-more-button' onClick={loadusers} disabled={loading}>{loading ? "Fetching..." : "Load More"}</button>
    </div>
  )
}

export default RandomUser