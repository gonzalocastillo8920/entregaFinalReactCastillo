import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../hooks/useCart"
import { useNotification } from "../../context/NotificationContext";


const ItemDetail = ({ name, img, id, price, stock, description, category }) => {

    const {addItem, isInCart} = useCart();
    const {setNotification} = useNotification();

    const handleAdd = (count) => {
        const productObj = {
            id, name, price, quantity: count
        }
        addItem(productObj)
        setNotification('success', `se agregaron ${count} ${name}`);
    }

    return (
        <article className="m-3">
            <div key={id} className="container card card-header" style={{ width: '25rem' }}>
                <p className="text-center"><small className=" text-body-secondary">Categoria: {category}</small></p>
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p>{description}</p>
                    <p>$ {price}</p>
                    <p><small className=" text-body-secondary">Disponibilidad: {stock} en stock</small></p>
                    <div>
                        {
                            isInCart(id) ? (
                                <Link to="/cart"> Finlizar compra </Link>
                            ) : (
                                <ItemCount stock={stock} onAdd={handleAdd} />
                            )
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail