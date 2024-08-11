import Item from "../Item/Item"
import "./ItemList.css";
const ItemList = ({products}) => {
  return (
    <div className="grid">
        {products.map(prod => {return <Item key={prod.id} {...prod} />
        })}
    </div>
  )
}

export default ItemList