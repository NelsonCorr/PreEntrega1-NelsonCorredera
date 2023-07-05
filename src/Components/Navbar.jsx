
import './Navbar.css';

const Navbar = ({menuItems}) => {
    
    return (
        <>
            <nav>
                <div className="navbar">
                    <button className="navbar-title">
                        AutomaticInc
                    </button>
                    <ul className={`navbar-menu `}>
                        <li className={`navbar-item`}>
                            <button >
                            PRODUCTS
                            </button>
                            
                        </li>
                        <li className={`navbar-item`}>
                        <button>
                            ELEMENTS
                            </button>
                        </li>
                        <li className={`navbar-item`}>
                        <button>
                            PURCHASE
                        </button>
                        </li>
                       
                    </ul>

                </div>
                {menuItems}
            </nav>
        </>);
}

export default Navbar;