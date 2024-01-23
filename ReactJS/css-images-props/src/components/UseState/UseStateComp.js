import React, {useState} from "react"

const UseStateComp = () => {
  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount((preState) => ++preState)
  }

  // increaseCount()
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Counter is {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={() => setCount((preState) => preState - 1)}>Decrease Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>    
    </div>
  )
}

export default UseStateComp