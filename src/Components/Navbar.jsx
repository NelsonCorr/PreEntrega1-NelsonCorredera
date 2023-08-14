
import CartWidget from './CartWidget';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {

    return (
        
            <nav className="navbar">
                <Link to='/'>
            <h3 className="Title"> AutomaticInc </h3>
            </Link>
                <div className="navbar-container">
                    <NavLink to={`/categoria/brazo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Brazo robotico </NavLink>
                    <NavLink to={`/categoria/torno`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Torno </NavLink>
                    <NavLink to={`/categoria/centro`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Centro de mecanizado </NavLink>
                    <CartWidget />
                </div>
            
           
          
        </nav >
        )
}

export default Navbar