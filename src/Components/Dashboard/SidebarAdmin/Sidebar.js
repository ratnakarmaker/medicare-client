import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";
import AddAdminForm from "../AddAdminForm/AddAdminForm";
import AddServiceForm from "../AddServiceForm/AddServiceForm";
import AdminServiceListTable from "../AdminServiceListTable/AdminServiceListTable";
import SidebarHeadingAdmin from "../SidebarHeadingAdmin/SidebarHeading";
import CollapseBarAdmin from "../CollapseBarAdmin/CollapseBar";

const Sidebar = ({ heading }) => {
  const location = useLocation();

  return (
    <div className="d-flex mb-5" id="wrapper">
      <div className="border-right border-0 d-none d-md-none d-lg-block" id="sidebar-wrapper">
        <div className="sidebar-heading">
          <NavLink to="/">
            <img src={logo} width="150" height="50" className="d-inline-block align-top mt-2" alt=""/>
          </NavLink>
        </div>
        <div className="list-group list-group-flush ">
          <SidebarHeadingAdmin />
        </div>
      </div>

      <div style={{ background: "#8BCCE6" }} id="page-content-wrapper">
        <nav style={{ background: "#ffffff" }} className="navbar navbar-expand-lg navbar-light">
          <h3 className="d-none d-md-none d-lg-block" style={{ fontFamily: "Piazzolla, serif" }}>
            {heading}
          </h3>
          <img src={logo} width="150" height="50" className="d-inline-block align-top mt-2 d-sm-block d-md-block d-lg-none " alt="volunteer network logo"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <CollapseBarAdmin />
          </div>
        </nav>

        <div className="container-fluid">
          {location.pathname === "/add-admin" && <AddAdminForm />}
          {location.pathname === "/add-service" && <AddServiceForm />}
          {location.pathname === "/admin-service-list" && (
            <AdminServiceListTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
