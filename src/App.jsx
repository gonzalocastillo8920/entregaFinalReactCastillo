import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { NotificationProvider } from "./context/NotificationContext";

function App() {

  const titulo = "Mi Store UY"

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar title={titulo} />

            <Routes>
              <Route exact path="/" element={<ItemListContainer greetings="Bienvenidos a Mi Store Sports Uruguay" />} />

              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />

              <Route exact path="/item/:productId" element={<ItemDetailContainer />} />

              <Route path="*" element={<h1>:( 404 Not found</h1>} />

              <Route exact path="/Cart" element={<Cart />} />

              <Route exact path="/Checkout" element={<Checkout />} />
            </Routes>

            <Footer title={titulo} />
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App;