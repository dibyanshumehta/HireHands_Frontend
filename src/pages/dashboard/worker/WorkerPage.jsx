import React, { useState } from "react";
import WorkerDashboardOverview from "../../../components/dashboard/worker/WorkerDashboardOverview";
import AvailableJobs from "../../../components/dashboard/worker/AvailableJobs";
import MyApplications from "../../../components/dashboard/worker/MyApplications";
import Earnings from "../../../components/profile/Worker/WorkerEarnings";
import WorkerProfile from "../../../components/profile/Worker/WorkerProfile";
import WorkerSidebar from "../../../components/dashboard/worker/WorkerSidebar";
import WorkerTopbar from "../../../components/dashboard/worker/WorkerTopbar";

const WorkerPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <WorkerDashboardOverview />;
      case "availableJobs":
        return <AvailableJobs />;
      case "myApplications":
        return <MyApplications />;
      case "earnings":
        return <Earnings />;
      case "profile":
        return <WorkerProfile />;
      default:
        return <WorkerDashboardOverview />;
    }
  };

  return (
    <div className="d-flex bg-light">

      {/* Sidebar */}
      <WorkerSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">

        <WorkerTopbar />

        <div className="mt-4">
          {renderContent()}
        </div>

      </div>

    </div>
  );
};

export default WorkerPage;