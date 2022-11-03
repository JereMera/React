import './checkout.css'
import { useState, useContext } from "react"
import { CartContext } from '../../Context/cardContext'
import { NotificationContext } from '../../notification/notificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: 'Jeremias Jesus Mera',
                    phone: '3416390700',
                    mail: 'jeremias@gmail.com'
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                setNotification('success', `El id de su compra es: ${orderAdded.id}`)
            } else {
                setNotification('error', 'No quedan asientos disponibles en la sala')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Se esta generando tu compra...</h1>
    }

    return (
        <div>
            <h1 className="title">Checkout</h1>
            <button className="button" onClick={createOrder}>generar compra</button>
        </div>
    )
}

export default Checkout