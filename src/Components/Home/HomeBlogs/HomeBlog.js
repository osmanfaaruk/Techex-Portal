import React from "react";
import DumePic from "../../../Photos/IMG_8952.jpg";

const HomeBlog = () => {
  return (
    <div>
      <section className="features-service pb-0 pb-md-5 my-5">
        <div className="container mb-5">
          <div className="row mb-5">


            <div class="card mb-3" style={{maxWidth: "900px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={DumePic} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4 m-md-0">ok</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlog;
