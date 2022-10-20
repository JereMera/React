import CartWidget from '../CartWidget/cartwidget';
import './Navbar.css';
import logo from './LOGO2.png';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <nav className="NavBar">

            <Link to='/'>
                <img className='iso' src={logo} alt='iso' width={150}/>
            </Link>

            <div className="Categories">
                <Link to={'/category/infantil'} className='Option'>Infantil</Link>
                <Link to={'/category/biografia'} className='Option'>Biografia</Link>
                <Link to={'/category/accion'} className='Option'>Accion</Link>
            </div>

            <CartWidget />

        </nav>

    )
}
export default Menu