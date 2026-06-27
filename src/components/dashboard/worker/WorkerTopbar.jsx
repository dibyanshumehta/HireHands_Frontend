import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const WorkerTopbar = () => {
  const [workerData, setWorkerData] = useState(null);
  useEffect(() => {

    const fetchToken = localStorage.getItem("authToken");
    if(fetchToken){
      try{
        const decodeToken = jwtDecode(fetchToken);
        setWorkerData(decodeToken);
        console.log("Decoded Token:", decodeToken);
      } catch (error) {
        console.log("Invalid Token:", error);
      }
    }
  }, []);
  return (
    <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center rounded-3">

      {/* Left Side */}
      <div>
        {workerData ? (

          <h4 className="fw-bold mb-0">Welcome Back, {workerData.name}</h4>
        ) : (
          <h4 className="fw-bold mb-0">Welcome Back, Worker</h4>
        )}
          <small className="text-muted">
          Explore jobs and manage your applications.
        </small>
        
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-4">

        {/* Notifications */}
        <button className="btn btn-light position-relative rounded-circle p-2">
          <FaBell size={18} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2
          </span>
        </button>

        {/* Profile Info */}
        <div className="d-flex align-items-center gap-2">
          <FaUserCircle size={36} className="text-primary" />
          <div>
            {workerData ? (
              <p className="mb-0 fw-semibold">{workerData.name}</p>
            ): (
              <p className="mb-0 fw-semibold">Worker</p> 
            )}
            <small className="text-muted">Worker</small>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkerTopbar;