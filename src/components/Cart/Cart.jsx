import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, totalPrice, totalQuantity, clearCart} = useCart();
    const total = totalPrice;
    const handleRemove = () => {
        clearCart();
      }

    if (totalQuantity === 0) {
        return <h1 className="text-center">No hay Items en el Carrito</h1>
    }
  return (
    <div>
        {cart.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}
        <h3 className="text-center">Total de la compra: $ {total}</h3>
        <div>
            <button className="btn btn-danger" onClick={() => handleRemove()}>Limpiar Carrito</button>
            <Link to="/Checkout" className="btn btn-success">Checkout</Link>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Cart