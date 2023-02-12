import React, { useState, useContext } from "react";
import sublinks from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [pageItem, setPageItem] = useState("");
  const [pageSubMenu, setPageSubMenu] = useState([]);
  const [location, setLocation] = useState('')

  function sideBarOpen() {
    setOpenSideBar(true);
  }

  function sideBarClose() {
    setOpenSideBar(false);
  }

  function submenuOpen(el,position) {
    setOpenSubMenu(true);
    const item = sublinks.find(({ page, link }) => page === el);
    setLocation(position)
    setPageItem(item.page);
    setPageSubMenu(item.links)
  }

  function submenuClose() {
    setOpenSubMenu(false);
  }
  return (
    <AppContext.Provider
      value={{
        openSideBar,
        sideBarOpen,
        sideBarClose,
        openSubMenu,
        submenuOpen,
        submenuClose,
        pageItem,
        setPageItem,
        pageSubMenu,
        setPageSubMenu,
        setLocation,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
