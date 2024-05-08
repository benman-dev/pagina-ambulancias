import React from 'react';
import conductor from '../img/conductor.jpeg';

const CreateCard = ({ img, nombre, datos }) => {
    return (  
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" id="card-paint" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <h5 className="datos">{datos}</h5>
                </div>
            </div>
        </div>
    );
};

const CreateCardGroup = () => {
    return (
        <div id="card-carousel" className="carousel slide" data-bs-interval="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                        <CreateCard img={conductor} nombre="nombre" datos="conductor" />
                        <CreateCard img={conductor} nombre="Rodrigo" datos="conductor" />
                        <CreateCard img={conductor} nombre="nombre" datos="conductor" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-5 g-4" id="info">
                        <CreateCard img={conductor} nombre="nombre" datos="conductor" />
                        <CreateCard img={conductor} nombre="nombre" datos="conductor" />
                        <CreateCard img={conductor} nombre="nombre" datos="conductor" />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" id="carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id="carousel-btn" type="button" data-bs-target="#card-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CreateCardGroup;
