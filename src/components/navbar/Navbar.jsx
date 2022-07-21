import Logo from '../../images/logo1.png'
import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <div className='navbar_ctn'>
        <nav className='navbar'>
            <img className="navbar_logo"src={Logo} alt=""/>
            <div className="topnav">
                <input type="text" placeholder="Search.."/>
            </div>
            <div className='button_ctn'>
                <button className="navbar_register">Register</button>
                <Link to={`/favorites/`}>
                    <button className='navbar_favlist_button'>FavList</button>
                </Link>
            </div>
        </nav>
        </div>
    )
}
