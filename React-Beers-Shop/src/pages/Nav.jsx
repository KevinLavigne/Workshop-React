import { Link } from "react-router-dom"
import Logo from "../../assets/my-beer-my-work.jpg"

const Nav =() =>{
  return(
    <div className="nav">
    <img src={Logo} />
    <div className="link">
    <Link to="/">Home</Link>
    <Link to="/beers">Beers</Link>
    </div>
    </div>
  )
}
export default Nav