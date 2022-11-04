import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">Sextina</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to='/category/vibro' className="nav-item">Vibro</Link>
                        <Link to='/category/pLug' className="nav-item">Plug</Link>
                        <Link to='/category/satisfacer' className="nav-item">Satisfacer</Link>
                        <Link to='/contacto' className="nav-item">Contacto</Link>
                        <Link to='/cart' className="nav-item">Carrito</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar