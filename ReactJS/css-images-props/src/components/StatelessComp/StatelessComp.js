const StatelessComp = ({
    fontSize = 10,
    borderRadius = 5,
    padding = 10,
    backgroundColor = 'red'
}) => {
    // console.log(props);s
    return <button style={{
        fontSize: `${fontSize}px`,
        padding: "10px",
        border: "2px solid yellow",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        color: "white"
  }}>Register</button>
}

export default StatelessComp