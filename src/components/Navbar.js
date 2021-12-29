import React from 'react'
import './styles/navbar.css'
import logo from '../images/logo.png'


const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-ligth bg-ligth">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} width="150" height="45" alt="Logo" /></a>
                <div className="icono-container">
                    <div className="icono-github">
                        <a href="https://www.github.com/lauchaventura" target="_blank" ><i class="bi bi-github"></i></a>
                    </div>
                    <div className="icono-linkedin">
                        <a href="https://www.linkedin.com/in/lautaro-ventura-041513229/" target="_blank" ><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>


        </nav>

    )
}

export default Navbar
