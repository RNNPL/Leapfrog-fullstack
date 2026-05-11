import Logo from "../Logo";
import SidebarLinks from "./SidebarLinks";


function Sidebar() {
  return (
    <aside className="sidebar">

      <Logo />

      <SidebarLinks />

    </aside>
  );
}

export default Sidebar;