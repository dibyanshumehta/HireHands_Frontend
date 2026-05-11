import React from "react";
import workerCTAImg from "../../assets/landingpage/works/secondwork.png";

const WorkerCTA = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Side - Text Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                Looking for Work? Join HireHands Today
              </h2>

              <p className="text-muted mb-4">
                Create your profile, connect with nearby clients, and start
                earning by offering your skills on your own schedule.
              </p>

              <div className="mb-4">
                <div className="mb-3">
                  <h6 className="fw-semibold">Find Local Clients</h6>
                  <p className="text-muted mb-0">
                    Connect with people in your area who need your services.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-semibold">Flexible Working Hours</h6>
                  <p className="text-muted mb-0">
                    Work on your own schedule and choose jobs that suit you.
                  </p>
                </div>

                <div>
                  <h6 className="fw-semibold">Grow Your Reputation</h6>
                  <p className="text-muted mb-0">
                    Build trust through ratings and client reviews.
                  </p>
                </div>
              </div>

              <button className="btn btn-primary btn-lg px-4">
                Join as Worker
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="col-lg-6">
              <img
                src={workerCTAImg}
                alt="Join as Worker"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkerCTA;
