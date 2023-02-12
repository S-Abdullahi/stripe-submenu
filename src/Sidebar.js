import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./Data";
import { useGlobalContext } from "./Context";

export default function Sidebar() {
    const {openSideBar, sideBarClose} = useGlobalContext()
  return (
    <aside className={`sidebar-con ${openSideBar && 'show'}`}>
      <button className="sidebar-cancel-btn">
        <FaTimes className="sidebar-cancel" onClick={()=>sideBarClose()} />
      </button>
      <div className="sidebar-item">
        {sublinks.map(({ page, links }, index) => {
          return (
            <div key={index}>
              <h4 className="sidebar-heading">{page}</h4>
              <div className="sidebar-content">
              {links.map(({ label, icon, url }, index) => {
                return (
                  
                    <a href={url} className="sidebar-content-item" key={index}>
                      {icon}
                      <span>{label}</span>
                    </a>
                 
                );
              })}
               </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
