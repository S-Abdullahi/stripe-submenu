import React from "react";
import { FaCreditCard, FaBook, FaBriefcase, FaTimes } from "react-icons/fa";
import sublinks from "./Data";

export default function Sidebar() {
  return (
    <aside className="sidebar-con">
      <button className="sidebar-cancel-btn">
        <FaTimes className="sidebar-cancel" />
      </button>
      <div className="sidebar-item">
        {sublinks.map(({ page, links }) => {
          return (
            <>
              <h4 className="sidebar-heading">{page}</h4>
              <div className="sidebar-content">
              {links.map(({ label, icon, url }) => {
                return (
                  
                    <a href={url} className="sidebar-content-item">
                      {icon}
                      <span>{label}</span>
                    </a>
                 
                );
              })}
               </div>
            </>
          );
        })}
      </div>
    </aside>
  );
}
