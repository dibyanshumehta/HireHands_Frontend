import React from "react";
import heroIllustration from "../../assets/landingpage/heroillustration.png";
import { Link } from "react-router-dom";

const LandingHeroSec = ({setShowModel}) => {
  return (
    <>
      <section className="hero-section position-relative overflow-hidden bg-light">
        <div className="container-fluid px-0">
          <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active position-relative">
                <img
                  src={heroIllustration}
                  className="d-block w-100"
                  alt="HireHands Hero"
                  style={{
                    height: "650px",
                    objectFit: "cover",
                  }}
                />

                <div className="position-absolute top-50 start-0 translate-middle-y w-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <h1 className="display-4 fw-bold text-dark">
                          Find Trusted Local Workers for Every Need
                        </h1>

                        <p className="lead text-secondary my-4">
                          Hire skilled cooks, plumbers, babysitters, gardeners,
                          and more — quickly, safely, and locally.
                        </p>

                        <div className="d-flex gap-3 flex-wrap">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg px-4"
                            data-bs-toggle="modal"
                            data-bs-target="#userloginmodal"
                          >
                            Hire a Worker
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-primary btn-lg px-4"
                            data-bs-toggle="modal"
                            data-bs-target="#workerloginmodal"
                          >
                            Join as Worker
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHeroSec;
