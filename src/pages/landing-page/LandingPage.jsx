import React, { useState } from "react";
import { Link } from "react-router-dom";
import firstimg from "../../assets/landingpage/heroillustration.png";
import LandingStyles from "../../styles/landingpagestyle/landing_style.module.css";
import LandingHeader from "../../components/landingpage/LandingHeader";
import LandingHeroSec from "../../components/landingpage/LandingHeroSec";
import LandingServiceSec from "../../components/landingpage/LandingServiceSec";
import Howitworks from "../../components/landingpage/Howitworks";
import LandingFeatures from "../../components/landingpage/LandingFeatures";
import WorkerCTA from "../../components/landingpage/WorkerCTA";
import LandingFooter from "../../components/landingpage/LandingFooter";

function LandingPage() {
  const [userauth, setuserauth] = useState("login");
  const [workerauth, setworkerauth] = useState("login");
  return (
    <>
      <div className="container-fluid">
        <div className="row mx-3">
          <div className="col-lg-12 sticky-top">
            <LandingHeader />
          </div>
          <div className="col-lg-12">
            <LandingHeroSec />
          </div>
          <div className="col-lg-12">
            <LandingServiceSec />
          </div>
          <div className="col-lg-12">
            <Howitworks />
          </div>
          <div className="col-lg-12">
            <LandingFeatures />
          </div>
          <div className="col-lg-12">
            <WorkerCTA />
          </div>
          <div className="col-lg-12">
            <LandingFooter />
          </div>
        </div>
      </div>

      {/* Modal for User Login/Registration */}
      <div
        className="modal fade"
        id="userloginmodal"
        tabIndex="-1"
        aria-labelledby="userloginmodallabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="userloginmodallabel">
                {userauth === "login" ? "User Login" : "User Registration"}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className={userauth === "login" ? "d-block" : "d-none"}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="text-end mb-4">
                  <a
                    href="#"
                    className="text-decoration-none small text-primary"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>

              <form
                className={userauth === "registration" ? "d-block" : "d-none"}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>

                
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                  />
                </div>
                </div>
              </form>

              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                      <Link to="/userpage">
                        <button className="btn btn-primary w-50 py-1">
                          {userauth === "login" ? "Login" : "Register"}
                        </button>
                      </Link>

                      <p className="text-center mt-3 mb-0">
                        {userauth === "login" ? (
                          <span
                            type="button"
                            onClick={() => {
                              setuserauth("registration");
                            }}
                          >
                            Don't have an account? <span className="text-primary"> Register Now</span>
                          </span>
                        ) : (
                          <span
                            type="button"
                            onClick={() => {
                              setuserauth("login");
                            }}
                          >
                            Already have an account? <span className="text-primary"> Login Now </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Worker Login/Registration */}

      <div
        className="modal fade modal-lg"
        id="workerloginmodal"
        tabIndex="-1"
        aria-labelledby="workerloginmodallabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="workerloginmodallabel">
                {workerauth === "login"
                  ? "Worker Login"
                  : "Worker Registration"}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className={workerauth === "login" ? "d-block" : "d-none"}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="text-end mb-4">
                  <a
                    href="#"
                    className="text-decoration-none small text-primary"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>

              <form
                className={workerauth === "registration" ? "d-block" : "d-none"}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Username"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create password"
                    />
                  </div>
                </div>


                <h5 className="fw-semibold mb-3">Worker Details</h5>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Primary Skill</label>
                    <select className="form-select">
                      <option>Select Skill</option>
                      <option>Cook</option>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Babysitter</option>
                      <option>Gardener</option>
                      <option>Cleaner</option>
                      <option>Driver</option>
                      <option>Carpenter</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. 3 Years"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city / area"
                  />
                </div>

              </form>

              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                      <Link to="/workerpage">
                        <button className="btn btn-primary w-50 py-1">
                          {workerauth === "login" ? "Login" : "Register"}
                        </button>
                      </Link>

                      <p className="text-center mt-3 mb-0">
                        {workerauth === "login" ? (
                          <span
                            type="button"
                            onClick={() => {
                              setworkerauth("registration");
                            }}
                          >
                            Don't have an account? <span className="text-primary"> Register Now </span>
                          </span>
                        ) : (
                          <span
                            type="button"
                            onClick={() => {
                              setworkerauth("login");
                            }}
                          >
                            Already have an account? <span className="text-primary"> Login Now </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
