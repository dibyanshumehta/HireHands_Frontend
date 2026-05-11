import React from "react";

import cookIcon from "../../assets/landingpage/service_icons/cook.png";
import plumberIcon from "../../assets/landingpage/service_icons/plumber.png";
import babysitterIcon from "../../assets/landingpage/service_icons/babysitter.png";
import gardenerIcon from "../../assets/landingpage/service_icons/gardener.png";
import electricianIcon from "../../assets/landingpage/service_icons/electrician.png";
import cleanerIcon from "../../assets/landingpage/service_icons/cleaner.png";
import driverIcon from "../../assets/landingpage/service_icons/driver.png";
import carpenterIcon from "../../assets/landingpage/service_icons/carpentar.png";

const services = [
  { title: "Cook", icon: cookIcon },
  { title: "Plumber", icon: plumberIcon },
  { title: "Baby Sitter", icon: babysitterIcon },
  { title: "Gardener", icon: gardenerIcon },
  { title: "Electrician", icon: electricianIcon },
  { title: "Cleaner", icon: cleanerIcon },
  { title: "Driver", icon: driverIcon },
  { title: "Carpenter", icon: carpenterIcon },
];

const LandingServiceSec = () => {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Explore Our Services</h2>
            <p className="text-muted mt-3">
              Find skilled professionals for every household and daily need.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm text-center p-4 rounded-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid mx-auto mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />

                  <h5 className="fw-semibold mb-0">{service.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingServiceSec;
