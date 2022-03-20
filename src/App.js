import React, {useState, useEffect} from 'react'
import Profile from './Profile'

const App = () => {

  const [users, setUsers] = useState([])

  const handleFetch = async () => {
    const response = await fetch("https://api.github.com/users")
    .then((response) => response.json())

    setUsers(response)
  }
  
  useEffect(() => {
    handleFetch();
  }, [])
  
  return (
    <div className="test">
      {
        users.map((user, index) => {
          return <Profile key={index} url={user.avatar_url} name={user.login}/>
        })
      }
    </div>
  )
}

export default App