import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css';
import logo from './isologo.png';
import CartWidget from '../CartWidget/cartwidget';


function Menu() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <img className='iso' src={logo} href="#home" alt='iso' />
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    );
}
export default Menu