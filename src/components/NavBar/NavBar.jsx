import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({ title }) {
   
    return (
        <div className="navbar navbar-expand-lg sticky-top bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">{title}</Link>
                
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/category/hombres">Hombres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/category/damas">Damas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/category/niños">Niños</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/category/deportes">Deportes</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link>
                            <CartWidget />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;