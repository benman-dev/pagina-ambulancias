import React, { useState, useEffect } from 'react'
import logo from '../img/logo.svg';


const mail = "bemancilla2@gmail.com";

const CreateNavBar = () => {

    const [mode, setMode] = useState('mode-1');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5 && window.scrollY < 650) {
                setMode('mode-2');
            } else if (window.scrollY >= 650) {
                setMode('mode-3');
            } else {
                setMode('mode-1');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <React.Fragment>
        <nav className={`navbar navbar-expand-lg fixed-top ${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="100" height="70" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#more">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <form action={`https://formsubmit.co/${mail}`} method="POST">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nombre</label>
                                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre completo" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="email" name="email" className="form-control" id="exampleInputPassword1" placeholder="Email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Mensaje</label>
                                <textarea className="form-control" type="text" name="text" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>

        );
};

export default CreateNavBar;