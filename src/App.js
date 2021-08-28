import React, { useState, useEffect } from 'react'

const App = () => {
    const [users, setUsers] = useState({name:'一郎'})
    useEffect(() => {
      fetch('http://localhost:5000/api/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    })
    return (
      <div>
          {users.name}
      </div>
    )
}
export default App