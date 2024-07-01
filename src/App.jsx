import React from "react"
import {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <>
      <NavBar cartCount={cartCount} title="Mi Store" />
      <ItemListContainer greetings="Bienvenidos a Mi Store Sports Uruguay" />
    </>
  )
}

export default App