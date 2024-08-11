import { Link } from "react-router-dom"

const Footer = ({ title }) => {
    return (
        <>
            <div className="container">
                <div className="row border-top py-2 justify-content-between">
                    <div className="col-auto">
                        <p className="h4">{title}</p>
                        <a href="#" className="btn btn-link text-decoration-none">Acerca de</a>
                        <a href="#" className="btn btn-link text-decoration-none">Contacto</a>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="btn btn-light active">Ir arriba</a>
                    </div>
                </div>
                <div className="text-center"><small>This page is available under the Creative Commons Attribution-ShareAlike License 4.0; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy.</small></div>
                <div className="text-center"><small>2024 All rights Reserved.</small></div>
            </div>
        </>
    )

}

export default Footer

