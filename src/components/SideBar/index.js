import React from "react";
import SideBar from "./SideBar";

function index() {
  return (
    <SideBar>
      <div className="sidebar-item">
        <h3> App </h3>
        <ul>
          <li className="-active">
            <i className="fas fa-globe-africa"></i>
            <span> Explore </span>
          </li>
          <li>
            <i className="fas fa-volume-up"></i>
            <span> Suggest </span>
          </li>
          <li>
            <i className="fas fa-chart-bar"></i>
            <span> Top Charts </span>
          </li>
          <li>
            <i className="fas fa-music"></i>
            <span> New Results </span>
          </li>
        </ul>
      </div>
      <div className="sidebar-item">
        <h3> Personal </h3>
        <ul>
          <li>
            <i className="fas fa-heart"></i>
            <span> Favorites </span>
          </li>
          <li>
            <i className="fas fa-compact-disc"></i>
            <span> Albums </span>
          </li>
          <li>
            <i className="fas fa-list"></i>
            <span> Playlists </span>
          </li>
          <li>
            <i className="fas fa-genderless"></i>
            <span> Genderless </span>
          </li>
        </ul>
      </div>
    </SideBar>
  );
}

export default index;
