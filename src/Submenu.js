import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

export default function Submenu() {
  const {
    openSubMenu,
    pageItem,
    pageSubMenu,
    location,
  } = useGlobalContext();

  const submenuPosition = useRef(null);
  useEffect(() => {
    const item = submenuPosition.current;
    item.style.left = `${location}px`;
  }, [location, pageItem]);

  let col;
  if (pageSubMenu.length > 3) {
    col = "col-4";
  } else if (pageSubMenu.length === 3) {
    col = "col-3";
  } else {
    col = "";
  }
  return (
    <div className={`submenu  ${openSubMenu && "show"}`} ref={submenuPosition}>
      <h1>{pageItem}</h1>
      <div className={`submenu-item-con ${col}`}>
        {pageSubMenu.map(({ label, icon, url }, index) => {
          return (
            <a href={url} key={index} className="submenu-item-link">
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
