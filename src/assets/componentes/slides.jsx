import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';


const CreateSlide = (img, title, info) => {
    return(
        <div>
            <img src={img} class="d-block" alt="..." id="img-carousel"></img>
            <div class="carousel-caption">
                <h5>{title}</h5>
                <p>{info}</p>
            </div>
        </div>
    );
};

const CreateSlideShow = () => {
    return(
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item active">
                {CreateSlide(img1,"Titulo 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
            </div>
            <div class="carousel-item">
                {CreateSlide(img2,"Titulo 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
            </div>
            <div class="carousel-item">
                {CreateSlide(img3,"Titulo 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}
            </div>
        </div>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
    );
};
export default CreateSlideShow;