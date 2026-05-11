import React from "react";
import howItWorksImg from "../../assets/landingpage/works/firstwork.png";

const Howitworks = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">How HireHands Works</h2>
            <p className="text-muted mt-3">
              A simple and seamless process for both clients and workers.
            </p>
          </div>

          <div className="row align-items-center g-5">
            {/* Left Side - Illustration */}
            <div className="col-lg-6">
              <img
                src={howItWorksImg}
                alt="How HireHands Works"
                className="img-fluid"
              />
            </div>

            {/* Right Side - Steps */}
            <div className="col-lg-6">
              {/* For Clients */}
              <div className="mb-5">
                <h4 className="fw-bold mb-4 text-primary">For Clients</h4>

                <div className="mb-3">
                  <h6 className="fw-semibold">1. Post Your Requirement</h6>
                  <p className="text-muted mb-0">
                    Tell us what service you need and share your job details.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-semibold">2. Review Applicants</h6>
                  <p className="text-muted mb-0">
                    Browse available workers and compare profiles.
                  </p>
                </div>

                <div>
                  <h6 className="fw-semibold">3. Hire the Best Worker</h6>
                  <p className="text-muted mb-0">
                    Choose the right worker and get your job done.
                  </p>
                </div>
              </div>

              {/* For Workers */}
              <div>
                <h4 className="fw-bold mb-4 text-success">For Workers</h4>

                <div className="mb-3">
                  <h6 className="fw-semibold">1. Create Your Profile</h6>
                  <p className="text-muted mb-0">
                    Sign up and showcase your skills and experience.
                  </p>
                </div>

                <div className="mb-3">
                  <h6 className="fw-semibold">2. Apply for Jobs</h6>
                  <p className="text-muted mb-0">
                    Explore nearby opportunities and submit applications.
                  </p>
                </div>

                <div>
                  <h6 className="fw-semibold">3. Start Earning</h6>
                  <p className="text-muted mb-0">
                    Get hired by clients and begin working flexibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howitworks;
