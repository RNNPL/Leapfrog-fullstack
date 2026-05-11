import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import NewMeeting from "../pages/NewMeeting";
import JoinMeeting from "../pages/JoinMeeting";
import Calendar from "../pages/Calendar";
import ScheduleMeeting from "../pages/ScheduleMeeting";
import ProfileSettings from "../pages/ProfileSettings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="new-meeting" element={<NewMeeting />} />

          <Route path="join-meeting" element={<JoinMeeting />} />

          <Route path="calendar" element={<Calendar />} />

          <Route path="schedule-meeting" element={<ScheduleMeeting />} />

          <Route path="profile-settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
