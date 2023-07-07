import './Carousel.css'
import React from 'react'


export const Carousel = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.postimg.cc/nzqj1SBx/323421961-720435039654155-1833200459704447928-n.jpg" class="d-block w-100" alt="img" />
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/s2hvVHnW/29664695-957231537784233-6248706099045523083-o.jpg" class="d-block w-100" alt="img" />
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/jqQnw9RQ/346317906-1176500057079048-742998916234068424-n.png" class="d-block w-100" alt="img" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )


}

