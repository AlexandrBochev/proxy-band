import Link from 'next/link'
import { useEffect, useState } from 'react'
import Posts from '../posts/Posts'

const Users = () => {

  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert( "Oops! Something went wrong!" )
    } 
  }

  useEffect(() => { 
    fetchData()
  }, [])

  return (
    <div>
      <h1>Users List</h1>
      { loading && <p>Loading...</p> }
      { openPopup && <Posts props={openPopup}/> }
      <ul>
        { users && users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <button><Link href={`/${user.id}`}>Albums</Link></button>
            <button onClick={() => setOpenPopup(user)} style={{cursor: 'pointer'}}>Posts</button>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Users