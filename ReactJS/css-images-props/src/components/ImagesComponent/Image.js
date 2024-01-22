import agriculture from '../../images/agriculture-7302617_1280.jpg'
import './Image.css'

const Image = () => {
  return (
      <div class="container">
          <h1>Images in React</h1>
          <img style={{ width: "500px", height: "500px"}} src={agriculture} alt="" />
    </div>
  )
}

export default Image