import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useNotification } from "../../context/NotificationContext"


import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer ({ greetings }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const {setNotification} = useNotification();

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products"); 

        getDocs(collectionRef)
            .then((querySnapshot) => {
            const products = querySnapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        .catch(() => {
            setNotification("danger", `No es posible cargar los productos`);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [categoryId])

    if(loading) {
        return (
            <h3 style={{color: "white", backgroundColor: "#0d8515", textAlign: "center"}}>
                Cargando Productos...
            </h3>
        );
    }
    
    return (
        <>
            <h2 className="text-center">{greetings}</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer
