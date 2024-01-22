function Events() {

    const handleClick = (a, b) => {
        const result = a + b
        console.log(result);
    }

    return (
        <div>
            <h3>Event Handler</h3>
            <button onClick={() => handleClick(10, 20)}>Click Me</button>
        </div>
    )
}

export default Events