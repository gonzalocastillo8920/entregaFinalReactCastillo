import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        if (!category) {
            getProducts()
                .then((res) => {
                    setProducts(res)
                })
                .catch((err) => console.log(err))
        } else {
            getProductsByCategory(category)
                .then((res) => {
                    setProducts(res)
                })
                .catch((err) => console.log(err))
        }

    }, [category])

    return (
        <>
            <h1 className="text-center">{greetings}</h1>
            <ItemList products={products} />
        </>
    )
}


export default ItemListContainer
