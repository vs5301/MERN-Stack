import StatefulComp from "./components/StatelessComp/StatefulComp"
import StatelessComp from "./components/StatelessComp/StatelessComp"

const App = () => {
    /*
        const user = {
            userName: 'Candy',
            isMarried: true,
            scrore: [1,2,3,4,5],
        }   
    */
    return (
        <div>
            <h1>App Component</h1>
            <StatefulComp />
            <StatelessComp />
        </div>
    )
}

export default App