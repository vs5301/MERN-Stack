const Message = ({userName, age}) => {
  return (
    <div>
          <h2>Good morning, {userName}</h2>
          <p>Welcome to this event</p>
          <p>Your age is {age}</p>
    </div>
  )
}

export default Message