import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/itemList'
import { useParams } from 'react-router-dom'

//const products = [
//{
//   id: '1',
//   name: 'Toy Story ',
//   price: 310,
//   category: 'infantil',
//   img: 'https://lumiere-a.akamaihd.net/v1/images/image_bf8739ba.jpeg?region=0,0,540,810',
//   descripcion: 'blablablabla'

//},
//{
//    id: '2',
//    name: 'Elvis ',
//    price: 290,
//    category: 'Biografia',
//    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPigxpiumipUnEa9Iy54Tim341TRHedVXU9LD4DK7csPz-jSJ3AXuIBTCGmN2zInWW3s8&usqp=CAU',
//    descripcion: 'blablablabla'
//},

//{
//    id: '3',
//    name: 'Top Gun ',
//    price: 370,
//    category: 'Accion',
//    img: 'https://images.justwatch.com/poster/266397128/s718/vesper.%7Bformat%7D',
//    descripcion: 'blablablabla'
//}
//]

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando peliculas...</h1>
    }
    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer