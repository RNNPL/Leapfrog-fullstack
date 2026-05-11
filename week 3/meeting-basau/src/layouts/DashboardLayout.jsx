import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DashboardLayout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content-wrapper">

        <Header />

        <main className="main-content">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default DashboardLayout;