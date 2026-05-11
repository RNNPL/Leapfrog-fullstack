import { NavLink } from "react-router";

function SidebarLinks() {
  return (
    <nav className="sidebar-links">
      <NavLink to="/dashboard">Dashboard</NavLink>

      <NavLink to="/new-meeting">New Meeting</NavLink>

      <NavLink to="/join-meeting">Join Meeting</NavLink>

      <NavLink to="/calendar">Calendar</NavLink>

      <NavLink to="/schedule-meeting">Schedule Meeting</NavLink>

      <NavLink to="/profile-settings">Profile Settings</NavLink>
    </nav>
  );
}

export default SidebarLinks;
