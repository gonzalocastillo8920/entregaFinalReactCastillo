import { useState } from "react"
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase"
import { Link } from "react-router-dom";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, totalQuantity, totalPrice, clearCart } = useCart();
  const total = totalPrice;

  const createOrder = async () => {
    setLoading(true)

    try {
      const objOrder = {
        buyer: { firstName:"nombre", lastName: "apellido", phone: "phone", adress: "adress" },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      }

      const ids = cart.map((item) => item.id)

      const productRef = collection(db, "products")

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids)))
      const { docs } = productsAddedFromFirestore;

      const outOfStock = []
      const batch = writeBatch(db)

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDB = dataDoc.stock

        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderCreated(true)
        clearCart()
      } else {
        ('')
      }

    } catch (error) {
      ("")
    } finally {
      setLoading(false)
    }
  }

  if(loading) {
    return <h1 className="text-center">Se esta generando la Orden</h1>
  }

  if(orderCreated) {
    return <h1 className="text-center">La orden fue creada Correctamente :)</h1>
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form action="buyer">
        <ul>
          <li>
            <label for="firstName">Nombre: </label>
            <input type="text" id="firstName"/>
          </li>
          <li>
            <label for="lastName">Apellido: </label>
            <input type="text" id="lastName"/>
          </li>
          <li>
            <label for="phone">Telefono: </label>
            <input type="text" id="phone"/>
          </li>
          <li>
            <label for="adress"> <small>Dirección de envio: </small></label>
            <input type="text" id="adress"/>
          </li>
          <li>
            <label for="notes">Notas: </label>
          </li>
            <textarea id="notes"/>          
        </ul>
      </form>
      <button className="btn btn-success" onClick={createOrder}> Generar Orden de Pago</button>
      <div>
        <Link className="btn btn-info" to="/cart">Volver al Carrito</Link>
      </div>
    </div>
  )
}

export default Checkout