import { Link } from "react-router-dom"
import Logo from "../../assets/my-beer-my-work.jpg"

const Nav =() =>{
  return(
    <div>
    <img src={Logo} />
    <Link to="/">Home</Link>
    <link to="/beers">Beers</link>
    </div>
  )
}
