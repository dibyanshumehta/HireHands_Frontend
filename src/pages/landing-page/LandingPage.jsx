import React from "react";
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
    </>
  );
}

export default LandingPage;
