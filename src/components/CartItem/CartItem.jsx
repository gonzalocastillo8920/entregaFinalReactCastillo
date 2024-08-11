import { useCart } from "../../hooks/useCart"
import "./CartItem.css"

const CartItem = ({ id, name, quantity, price, img }) => {
  const {removeItem} = useCart();
  const handleRemove = (id) => {
    removeItem(id);
  }

  return (
    <article className="CardCartItem" >
      <header>
        <h3>{name}</h3>
        <img src={img} className="card-img-top" alt={name} />
      </header>
      <section>
        <img src={img} />
        <p>Cantidad {quantity}</p>
        <p>Precio por unidad: $ {price}</p>
      </section>
      <footer>
        <p>Subtotal: $ {price * quantity}</p>
        <button onClick={() => handleRemove(id)}>Borrar item</button>
      </footer>
    </article>
  )
}

export default CartItem