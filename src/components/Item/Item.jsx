import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price }) => {
    return (
        <article className="m-3">
            <div key={id} className="container card card-header" style={{ width: '15rem' }}>
                <p className="text-center"><small className=" text-body-secondary">Categoria: {category}</small></p>
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p>$ {price}</p>
                    <Link to={`/item/${id}`}>
                        <p className="btn btn-primary">Ver Detalle</p>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Item