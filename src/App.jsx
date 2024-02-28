// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MiniDrawer from "./components/AppBarDrawer";
import DashboardPage from "./pages/Dashboard/Dashboard.jsx";
import AnnouncementPage from "./pages/Announcement/Announcement.jsx";
import RoomReservationPage from "./pages/Room Reservation/RoomReservation.jsx";
import EquipmentReservationPage from "./pages/Equipment Reservation/EquipmentReservation.jsx";
import LostAndFoundPage from "./pages/Lost and Found/LostAndFound.jsx";
import FormsPage from "./pages/Forms/Forms.jsx";
import InboxPage from "./pages/Inbox/Inbox.jsx";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import AdminSpecificPage from "./pages/Admin Page/AdminSpecificPage.jsx";
import StudentSpecificPage from "./pages/Student Page/StudentSpecificPage.jsx";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleAuthentication = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setIsAuthenticated(true);
      setUserType(role);
      console.log("User type set:", role);
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleAuthentication={handleAuthentication} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <PrivateRoutes userType={userType} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
        }
  const PrivateRoutes = ({ userType }) => {
    useEffect(() => {
      console.log("User type received:", userType);
    }, [userType]);
  
    let specificPageComponent;
  
    if (userType === "admin") {
      specificPageComponent = <AdminSpecificPage />;
    } else if (userType === "student") {
      specificPageComponent = <StudentSpecificPage />;
    } else {
      specificPageComponent = (
        <MiniDrawer>
          <Route index element={<DashboardPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route
            path="/room-reservation"
            element={<RoomReservationPage userType={userType} />}
          />
          <Route
            path="/equipment-reservation"
            element={<EquipmentReservationPage userType={userType} />}
          />
          <Route path="/forms" element={<FormsPage userType={userType} />} />
          <Route path="/inbox" element={<InboxPage userType={userType} />} />
        </MiniDrawer>
      );
    }
  
    return specificPageComponent;
  };


export default App;
