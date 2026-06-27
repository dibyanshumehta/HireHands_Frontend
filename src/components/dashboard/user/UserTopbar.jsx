import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const UserTopbar = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {

    const fetchToken = localStorage.getItem("authToken");
    if(fetchToken) {
      try{
        const decodeToken = jwtDecode(fetchToken);
        setUserData(decodeToken);
        console.log("Decoded Token:", decodeToken);
      } catch(error) {
        console.error("Invalid token:", error);
      }
    }
  },[]);




  return (
    <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center rounded-3 sticky-top top-0">

      {/* Left Side */}
      <div>
        {userData ? (
        <h4 className="fw-bold mb-0">Welcome Back, {userData.name}</h4>
        ) : (
          <h4 className="fw-bold mb-0">Welcome Back, User</h4>
        )}
        <small className="text-muted">
          Manage your jobs and hire workers easily.
        </small>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-4">

        {/* Notifications */}
        <button className="btn btn-light position-relative rounded-circle p-2">
          <FaBell size={18} />
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
        </button>

        {/* Profile */}
        <div className="d-flex align-items-center gap-2">
          <FaUserCircle size={36} className="text-primary" />
          <div>
            {userData ? (
            <p className="mb-0 fw-semibold">{userData.name}</p>
            ) : (
              <p className="mb-0 fw-semibold">User</p>
            )}
            <small className="text-muted">Client</small>
            </div>
        </div>

      </div>
    </div>
  );
};

export default UserTopbar;