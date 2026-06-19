import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import UserPage from "./pages/dashboard/user/UserPage";
import WorkerPage from "./pages/dashboard/worker/WorkerPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(true);
    }
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/userpage"
          element={ 
            <ProtectedRoute>
              {" "}
              <UserPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/workerpage"
          element={ 
            <ProtectedRoute>
              {" "}
              <WorkerPage />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
