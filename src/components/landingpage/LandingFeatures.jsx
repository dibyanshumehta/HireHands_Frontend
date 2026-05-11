import React from "react";

import verifiedIcon from "../../assets/landingpage/verified_icons/first.png";
import easyHiringIcon from "../../assets/landingpage/verified_icons/second.png";
import localIcon from "../../assets/landingpage/verified_icons/third.png";
import secureIcon from "../../assets/landingpage/verified_icons/fourth.png";

const features = [
  {
    title: "Verified Workers",
    description:
      "Browse trusted worker profiles with verified skills and information.",
    icon: verifiedIcon,
  },
  {
    title: "Quick & Easy Hiring",
    description:
      "Post your requirement and connect with suitable workers quickly.",
    icon: easyHiringIcon,
  },
  {
    title: "Local Professionals",
    description:
      "Find nearby workers available in your area for faster service.",
    icon: localIcon,
  },
  {
    title: "Secure Platform",
    description:
      "A safe and reliable environment for both clients and workers.",
    icon: secureIcon,
  },
];

const LandingFeatures = () => {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose HireHands?</h2>
            <p className="text-muted mt-3">
              We make hiring local professionals simple, reliable, and secure.
            </p>
          </div>

          {/* Features Grid */}
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm text-center h-100 p-4 rounded-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="img-fluid mx-auto mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />

                  <h5 className="fw-semibold">{feature.title}</h5>

                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFeatures;
