import React, { useState } from "react";
import DashboardOverview from "../../../components/dashboard/user/DashboardOverview";
import PostJobForm from "../../../components/dashboard/user/PostJobForm";
import MyJobs from "../../../components/dashboard/user/MyJobs";
import BrowseWorkers from "../../../components/dashboard/user/BrowseWorkers";
import UserProfile from "../../../components/profile/User/UserProfile";
import UserSidebar from "../../../components/dashboard/user/UserSidebar";
import UserTopbar from "../../../components/dashboard/user/UserTopbar";


const UserPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "postJob":
        return <PostJobForm />;
      case "myJobs":
        return <MyJobs />;
      case "browseWorkers":
        return <BrowseWorkers />;
      case "profile":
        return <UserProfile />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="d-flex bg-light">

      {/* Sidebar */}
      <UserSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">

        <UserTopbar />

        <div className="mt-4">
          {renderContent()}
        </div>

      </div>

    </div>
  );
};

export default UserPage;