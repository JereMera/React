import './cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/cardContext'
import CartItem from '../CartItem/cartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <h1>No hay peliculas en el carrito</h1>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart