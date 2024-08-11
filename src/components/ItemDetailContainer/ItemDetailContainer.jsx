import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import  "./ItemDetailContainer.css"

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(()=>{
        setLoading(true)
        getDoc(doc(db, "products", productId))
            .then((querySnapshot)=>{
                const product = {id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(product)
            })
            .catch()
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);
    
    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <h3 sytle={{color: "white", textAlign: "center",}}> 
                Cargando producto...
                </h3>
            ) : (
                <ItemDetail {...product}/>
            )}
        </div>
    );
}

export default ItemDetailContainer