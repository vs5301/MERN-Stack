import React, { useState } from "react"

const StatefulComp = () => {
  // internal state
  const [user, setUser] = useState({
    firstname: "Joe",
    lastname: "Don",
    age: 23,
  })

  return (
    <div>
      <h2>Stateful Component</h2>
      <h3>Full name: {user.firstname} {user.lastname}</h3>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default StatefulComp