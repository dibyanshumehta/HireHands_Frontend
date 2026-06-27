import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <>
    <footer className="text-dark card pt-5 pb-3">
      <div className="container">

        <div className="row g-4">

          {/* Brand Info */}
          <div className="col-lg-4">
            <h4 className="fw-bold">HireHands</h4>
            <p className="mt-3">
              Connecting trusted local workers with people who need
              reliable services — quickly, safely, and efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">How It Works</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">About</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Connect With Us</h6>

            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-dark"><FaFacebookF /></a>
              <a href="#" className="text-dark"><FaInstagram /></a>
              <a href="#" className="text-dark"><FaLinkedinIn /></a>
              <a href="#" className="text-dark"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          © 2026 HireHands. All Rights Reserved.
        </div>

      </div>
    </footer>
    </>
  );
};

export default LandingFooter;