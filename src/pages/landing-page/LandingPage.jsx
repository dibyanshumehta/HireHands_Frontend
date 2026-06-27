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
import userRegiatrationHelper from "../../helper/user-helper.js/user-signup-helper";
import workerRegiatrationHelper from "../../helper/worker-helper.js/worker-signup-helper";
import workerLoginHelper from "../../helper/worker-helper.js/worker-signin-helper";
import userLoginHelper from "../../helper/user-helper.js/user-signin-helper";

function LandingPage() {
  const [userauth, setuserauth] = useState("userlogin");
  const [workerauth, setworkerauth] = useState("workerlogin");

  const {
    userRegistrationFormData,
    handleUserRegistrationFormChange,
    handleUserRegistrationFormSubmit,
  } = userRegiatrationHelper();

  const {
    workerRegistrationFormData,
    handleWorkerRegistrationFormChange,
    handleWorkerRegistrationFormSubmit,
  } = workerRegiatrationHelper();

  const {
    workerLoginFormData,
    handleWorkerLoginFormChange,
    handleWorkerLoginFormSubmit,
  } = workerLoginHelper();

  const {
    userLoginFormData,
    handleUserLoginFormChange,
    handleUserLoginFormSubmit,
  } = userLoginHelper();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
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
              <h1 className="modal-title fs-5" id="">
                {userauth === "userlogin" ? "User Login" : "User Registration"}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className={userauth === "userlogin" ? "d-block" : "d-none"}
                onSubmit={handleUserLoginFormSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    onChange={handleUserLoginFormChange}
                    name="username"
                    value={userLoginFormData.username}
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    onChange={handleUserLoginFormChange}
                    name="password"
                    value={userLoginFormData.password}
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

                <div className="row">
                  <div className="col-md-12 col-lg-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-50 py-1"
                      data-bs-dismiss="modal"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <form
                className={
                  userauth === "userregistration" ? "d-block" : "d-none"
                }
                onSubmit={handleUserRegistrationFormSubmit}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      onChange={handleUserRegistrationFormChange}
                      name="name"
                      value={userRegistrationFormData.name}
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Username</label>
                    <input
                      onChange={handleUserRegistrationFormChange}
                      name="username"
                      value={userRegistrationFormData.username}
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      onChange={handleUserRegistrationFormChange}
                      name="phone"
                      value={userRegistrationFormData.phone}
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>

                  {/* <div className="col-md-6 mb-3">
                    <label className="form-label w-100 d-flex">
                      OTP
                      <button
                        onClick={handleSendUserOtp}
                        className={`btn btn-outline-primary ms-auto ${LandingStyles.otp_btn} `}
                      >
                        Get OTP
                      </button>
                    </label>
                    <input
                      onChange={handleUserRegistrationFormChange}
                      name="otp"
                      value={userRegistrationFormData.email}
                      type="text"
                      className="form-control"
                      placeholder="Enter otp"
                    />
                  </div> */}

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      onChange={handleUserRegistrationFormChange}
                      name="password"
                      value={userRegistrationFormData.password}
                      type="password"
                      className="form-control"
                      placeholder="Create password"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 col-lg-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-50 py-1"
                      data-bs-dismiss="modal"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                      <p className="text-center mt-3 mb-0">
                        {userauth === "userlogin" ? (
                          <span
                            type="button"
                            onClick={() => {
                              setuserauth("userregistration");
                            }}
                          >
                            Don't have an account?{" "}
                            <span className="text-primary"> Register Now</span>
                          </span>
                        ) : (
                          <span
                            type="button"
                            onClick={() => {
                              setuserauth("userlogin");
                            }}
                          >
                            Already have an account?{" "}
                            <span className="text-primary"> Login Now </span>
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
                {workerauth === "workerlogin"
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
              <form
                className={workerauth === "workerlogin" ? "d-block" : "d-none"}
                onSubmit={handleWorkerLoginFormSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    onChange={handleWorkerLoginFormChange}
                    name="username"
                    value={workerLoginFormData.username}
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    onChange={handleWorkerLoginFormChange}
                    name="password"
                    value={workerLoginFormData.password}
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

                <div className="row">
                  <div className="col-md-12 col-lg-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-50 py-1"
                      data-bs-dismiss="modal"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <form
                className={
                  workerauth === "workerregistration" ? "d-block" : "d-none"
                }
                onSubmit={handleWorkerRegistrationFormSubmit}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      onChange={handleWorkerRegistrationFormChange}
                      name="name"
                      value={workerRegistrationFormData.name}
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Username</label>
                    <input
                      onChange={handleWorkerRegistrationFormChange}
                      name="username"
                      value={workerRegistrationFormData.username}
                      type="text"
                      className="form-control"
                      placeholder="Enter your Username"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      onChange={handleWorkerRegistrationFormChange}
                      name="phone"
                      value={workerRegistrationFormData.phone}
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>

                  {/* <div className="col-md-6 mb-3">
                    <label className="form-label w-100 d-flex">
                      OTP
                      <button
                        className={`btn btn-outline-primary ms-auto ${LandingStyles.otp_btn}`}
                      >
                        Get OTP
                      </button>
                    </label>
                    <input
                      onChange={handleWorkerRegistrationFormChange}
                      name="otp"
                      value={workerRegistrationFormData.otp}
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                    />
                  </div> */}

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      onChange={handleWorkerRegistrationFormChange}
                      name="password"
                      value={workerRegistrationFormData.password}
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
                    <select
                      className="form-select"
                      onChange={handleWorkerRegistrationFormChange}
                      name="skill"
                      value={workerRegistrationFormData.skill}
                    >
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
                      onChange={handleWorkerRegistrationFormChange}
                      name="experience"
                      value={workerRegistrationFormData.experience}
                      type="text"
                      className="form-control"
                      placeholder="e.g. 3 Years"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    onChange={handleWorkerRegistrationFormChange}
                    name="location"
                    value={workerRegistrationFormData.location}
                    type="text"
                    className="form-control"
                    placeholder="Enter your city / area"
                  />
                </div>

                <div className="row">
                  <div className="col-md-12 col-lg-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-50 py-1"
                      data-bs-dismiss="modal"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                      <p className="text-center mt-3 mb-0">
                        {workerauth === "workerlogin" ? (
                          <span
                            type="button"
                            onClick={() => {
                              setworkerauth("workerregistration");
                            }}
                          >
                            Don't have an account?{" "}
                            <span className="text-primary"> Register Now </span>
                          </span>
                        ) : (
                          <span
                            type="button"
                            onClick={() => {
                              setworkerauth("workerlogin");
                            }}
                          >
                            Already have an account?{" "}
                            <span className="text-primary"> Login Now </span>
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
