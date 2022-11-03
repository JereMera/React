import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item