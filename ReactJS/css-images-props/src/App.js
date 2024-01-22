import Message from "./components/Props/Message"

const App = () => {
    const user = {
        userName: 'Candy',
        isMarried: true,
        scrore: [1,2,3,4,5],
    }
    return (
        <div>
            <h1>App Component</h1>
            <Message user={user} />
        </div>
    )
}

export default App