import StatelessComp from "../StatelessComp/StatelessComp"
import "./CSSInReact.css"

const CSSInReact = () => {
  return (
    <div className="container">
      <h1 className="headerTitle">CSS in react using inline styling</h1>
      <p className="desc">This is the beginning of using css in react</p>
      <StatelessComp
        fontSize={80}
        padding={10}
        borderRadius={20}
        backgroundColor="green"
      />
    </div>
  )
}

export default CSSInReact