
import Navbar from "./Navbar";
import CartWidget from "./CartWidget";
const ContainerComponent = () => {
    const menuItems = <h1>Bienvenidos</h1>
    return (<>
        
            <Navbar />
            <CartWidget />
            {menuItems}
            
    </>);
}

export default ContainerComponent;