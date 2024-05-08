import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateNavBar from './assets/componentes/nav'
import CreateSlideShow from './assets/componentes/slides'
import CreateCardGroup from './assets/componentes/cards'
import Slidesfinal from './assets/componentes/services'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <CreateNavBar/>
    <CreateSlideShow/>
    
    <section id="servicios">
      <Slidesfinal/>
    </section>

    <section class="more" id="more">
        <h1>Nuestro equipo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <CreateCardGroup/>
    </section>

    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">© 2024 Quality Help</p>
            <a href="#" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            </a>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            </ul>
        </footer>
    </div>
    
  </React.Fragment>
)
