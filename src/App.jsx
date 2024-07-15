import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (

    <BrowserRouter>
      <NavBar cartCount={cartCount} title="Mi Store UY" />

      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Bienvenidos a Mi Store Sports Uruguay" />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App