import CartWidget from './CartWidget';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {

    return (
        
            <nav class="navbar">
                <Link to='/'>
            <h3> AutomaticInc </h3>
            </Link>
                <div class="navbar-container">
                    <NavLink to={`/categoria/brazo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Brazo robotico </NavLink>
                    <NavLink to={`/categoria/torno`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Torno </NavLink>
                    <NavLink to={`/categoria/centro`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Centro de mecanizado </NavLink>
                </div>
            <CartWidget class="carrito"/>
           
          
        </nav >
        )
}

export default Navbar