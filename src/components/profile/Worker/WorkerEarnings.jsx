import React from "react";
import { FaMoneyBillWave, FaWallet, FaCheckCircle } from "react-icons/fa";

const WorkerEarnings = () => {
  const earningsData = [
    {
      id: 1,
      job: "Home Cook Service",
      client: "John Doe",
      amount: "₹2,500",
      date: "2 May 2026",
      status: "Paid",
    },
    {
      id: 2,
      job: "Plumbing Repair",
      client: "Amit Sharma",
      amount: "₹1,800",
      date: "30 Apr 2026",
      status: "Paid",
    },
    {
      id: 3,
      job: "Gardening Work",
      client: "Riya Verma",
      amount: "₹1,200",
      date: "28 Apr 2026",
      status: "Pending",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">My Earnings</h3>
        <p className="text-muted mb-0">
          Track your income and payment history.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex align-items-center gap-3">
              <FaWallet size={28} className="text-primary" />
              <div>
                <p className="text-muted mb-1">Total Earnings</p>
                <h4 className="fw-bold mb-0">₹18,500</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex align-items-center gap-3">
              <FaMoneyBillWave size={28} className="text-success" />
              <div>
                <p className="text-muted mb-1">Paid Amount</p>
                <h4 className="fw-bold mb-0">₹15,300</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex align-items-center gap-3">
              <FaCheckCircle size={28} className="text-warning" />
              <div>
                <p className="text-muted mb-1">Pending Payments</p>
                <h4 className="fw-bold mb-0">₹3,200</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Job</th>
                <th>Client</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {earningsData.map((earning) => (
                <tr key={earning.id}>
                  <td>{earning.job}</td>
                  <td>{earning.client}</td>
                  <td>{earning.date}</td>
                  <td>{earning.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        earning.status === "Paid"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {earning.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerEarnings;