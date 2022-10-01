import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../App";
function Sidebar() {
  let context = useContext(StudentContext);

  return (
    <div>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr class="sidebar-divider my-0" />
        {/*Dashboard  */}
        <li class="nav-item active">
          <Link to="/dashboard">
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Interface</div>
        <hr class="sidebar-divider" />
        {/* Add Student */}
        <li class="nav-item">
          <Link to="/add-student/new" className="text-white p-2">
            <span>Add Students</span>
          </Link>
        </li>
        <hr class="sidebar-divider" />
        {/* All student */}
        <li class="nav-item">
          <Link to="/all-students" className="text-white p-2">
            <span>All Students</span>
          </Link>
        </li>
        <hr class="sidebar-divider" />
      </ul>
    </div>
  );
}
export default Sidebar;
