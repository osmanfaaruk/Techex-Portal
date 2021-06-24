import React from "react";
import Ai from '../../../Photos/Ai.png';
const CardSection = () => {
  return (
    <section className="pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-8 align-self-center">

            <div className="card bg-dark text-white">
              <img src={Ai} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Machine learning algorithms</h5>
                <p className="card-text">
                  This is a wider  with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">{new Date().toDateString('dddd,mmmm,yyyy')}</p>

              </div>
            </div>

          </div>

          <div className="col-md-4 mb-4 m-md-0">

          <div className="card-group">

  <div className="card">

    <iframe src="https://www.youtube.com/embed/I7NrVwm3apg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>

    <div className="card-body">
      <h5 className="card-title">ML algorithms</h5>
      <p className="card-text">Machine learning algorithms are programs (math and logic) that adjust themselves to perform better as they are exposed to more data. The “learning” part of machine learning means that those programs change how they process data over time, much as humans change how they process data by learning</p>
    </div>
  </div>

          </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CardSection;
