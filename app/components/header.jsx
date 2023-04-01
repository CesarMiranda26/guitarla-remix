import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Nav from "./nav"

const Header = () => {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/'>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        
        <Nav />
      </div>
    </header>
  )
}

export default Header