import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    };

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            setNotification("warning", `El producto ya esta en el Carrito`);
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id)
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu;
    }

    const getTotal = () => {
        let acc = 0;
        cart.forEach((item) => {
            acc += (item.quantity * item.price)
        })
        return acc;
    }

    const totalQuantity = getTotalQuantity()
    const totalPrice = getTotal()

    const obj = { cart, isInCart, addItem, totalQuantity, totalPrice, removeItem, clearCart };
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}