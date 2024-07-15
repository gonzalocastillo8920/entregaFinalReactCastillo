

const ItemDetail = ({name, img, id, price, stock, description, category}) => {
    return (
        <div key={id} className="container card card-header" style={{ width: '25rem' }}>
            <p className="text-center"><small className=" text-body-secondary">Categoria: {category}</small></p>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h4 className="card-title">{name}</h4>
                <p>{description}</p>
                <p>$ {price}</p>
                <p className="btn btn-primary">Agregar al Carrito</p>
                <p><small className=" text-body-secondary">Disponibilidad: {stock} en stock</small></p>
            </div>
        </div>
    )
}

export default ItemDetail