import React from 'react';
import s1 from '../img/s1.jpg';
import img1 from '../img/img1.jpg'
import s2 from '../img/s2.jpg';
import s3 from '../img/s3.jpg';
import s4 from '../img/s4.jpg';
import s5 from '../img/s5.jpg';
import s6 from '../img/s6.jpg';
import s7 from '../img/s7.jpg';
import s8 from '../img/s8.jpg';



const ServiceSlideShow = ({ title, text, img1, img2, img3 }) => {
    return (
        <div class='service-container'> 
            <div class='text-service'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div id="carousel-services" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="services-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="services-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="services-image" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServiceSlideShowTwist = ({ title, text, img1, img2, img3 }) => {
    return (
        <div class='service-container'> 
            <div id="carousel-services" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="services-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="services-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="services-image" alt="..."/>
                    </div>
                </div>
            </div>
            <div class='text-service-twist'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};


const SlidesFinal = () => {
    return (
        <React.Fragment>
            <ServiceSlideShow title={'Arriendo de ambulancias básicas con o sin equipamiento'} text={'Contamos con experiencia en la prestación de servicios en instituciones públicas y privadas. Realizamos traslados programados interregionales y dentro de la ciudad. No llevamos a cabo traslados de urgencia.'} img1={s1} img2={img1} img3={s2}/>
            <ServiceSlideShowTwist title={'Traslado de pacientes'} text={'Realizamos servicio de traslado de pacientes a distintos centros de diálisis en la ciudad de Puerto Montt.'} img1={s3} img2={s4} img3={s5}/>
            <ServiceSlideShow title={'Eventos'} text={'Nuestra empresa ofrece el servicio de arriendo de ambulancia básica con conductor y paramédico para garantizar la seguridad de todos los participantes en un evento o actividad deportiva. Proporcionamos un servicio profesional en caso de alguna emergencia, asegurando que disfruten de manera segura.'} img1={s6} img2={s7} img3={s8}/>
        </React.Fragment>
    );
};


export default SlidesFinal;