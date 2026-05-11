import React from "react";

const UserProfile = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">My Profile</h3>
        <p className="text-muted mb-0">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Profile Card */}
      <div className="card border-0 shadow-sm rounded-4 p-4">

        {/* Basic Info */}
        <div className="text-center mb-4">
          <div
            className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: "90px",
              height: "90px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            J
          </div>

          <h4 className="fw-bold mb-1">John Doe</h4>
          <p className="text-muted">Client Account</p>
        </div>

        {/* Profile Form */}
        <form>
          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="John Doe"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                defaultValue="johndoe123"
              />
            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue="john@example.com"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                defaultValue="+91 9876543210"
              />
            </div>

          </div>

          <div className="mb-4">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
            />
          </div>

          <button className="btn btn-primary px-4">
            Update Profile
          </button>
        </form>

      </div>
    </div>
  );
};

export default UserProfile;