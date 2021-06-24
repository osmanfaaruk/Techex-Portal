import React from "react";
import "./HeaderCarousel.css";
import pic1 from "../../../Photos/Pic1.jpg";
import pic2 from "../../../Photos/Pic2.jpg";
import pic3 from "../../../Photos/Pic3.jpg";
import pic4 from "../../../Photos/Pic4.jpg";
import pic5 from "../../../Photos/Pic5.jpg";
const HeaderCarousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5" data-bs-ride="carousel ">
    <div className="carousel-inner mt-5">
      <div className="carousel-item active ">
        <img src={pic4 } className="d-block img w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-container">
        <h2 className="fw-bolder"> Game Platform</h2>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>
      </div>
      </div>

      <div className="carousel-item">
        <img src={pic2} className="d-block img w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-container">
        <h2 className="fw-bolder text-dark">Mars rover</h2>

        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>
      </div>
      </div>
     
      <div className="carousel-item">
        <img src={pic3} className="d-block  w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-container">
        <h2 className="fw-bolder">Windows Future</h2>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>
      </div>
      </div>
     
      <div className="carousel-item">
        <img src={pic1} className="d-block img w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-container">
        <h2 className="fw-bolder"> Processor in Future</h2>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>
      </div>
      </div>
     
      <div className="carousel-item">
        <img src={pic5} className="d-block img w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block carousel-container">
        <h2 className="fw-bolder">Hackers in Future</h2>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>
      </div>
      </div>
     
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default HeaderCarousel;
