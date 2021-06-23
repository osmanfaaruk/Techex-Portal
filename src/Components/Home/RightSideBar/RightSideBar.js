import React from "react";
import Xbox2 from "../../../Photos/Xbox.png";
import Xbox3 from "../../../Photos/Unreal.png";
import Playstation from "../../../Photos/Epic.png";
import './RightSideBar.css';
const RightSideBar = () => {
  return (
    <section>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Xbox2} className="d-block w-100 " alt="..." />
          </div>

          <div className="carousel-item">
            <img src={Playstation} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Xbox3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-5 shadow-sm p-3 mb-5 bg-body rounded">
        <h5>Latest News</h5>

        <div class="card mt-3 ">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p className="text">Questions explained agreeable preferred strangers too him her son</p>
              <footer class="blockquote-footer">
                <small>{new Date().toDateString("dddd, mmmm, yyyy")}</small>
              </footer>
            </blockquote>
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p className="text">Middle-Earth: Shadow of Mordor with all DLC in Bundle Stars</p>
              <footer class="blockquote-footer">
                <small>{new Date().toDateString("dddd, mmmm, yyyy")}</small>
              </footer>
            </blockquote>
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p className="text">NASA just made a important step toward getting humans to Mars (Gallery)</p>
              <footer class="blockquote-footer">
                <small>{new Date().toDateString("dddd, mmmm, yyyy")}</small>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p className="text">The Mapple smartwatch is an expensive convenience gadget</p>
              <footer class="blockquote-footer">
                <small>{new Date().toDateString("dddd, mmmm, yyyy")}</small>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p className="text">Pax Mayne: In The Streets Of NYC (Testing Images + Post Pagination)</p>
              <footer class="blockquote-footer">
                <small>{new Date().toDateString("dddd, mmmm, yyyy")}</small>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
