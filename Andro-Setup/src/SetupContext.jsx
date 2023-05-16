import React, { createContext, useContext, useState } from "react";

const Store = createContext(null);

const SetupContext = ({ children }) => {
  const [homeSetups, setHomeSetups] = useState([]);
  const [singleSetup, setSingleSetup] = useState({});
  const [toggleShowAll, setToggleShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [navbarState, setNavbarState] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Store.Provider
      value={{
        homeSetups,
        setHomeSetups,
        toggleShowAll,
        setToggleShowAll,
        singleSetup,
        setSingleSetup,
        activeFilter,
        setActiveFilter,
        navbarState,
        setNavbarState,
        formData,
        setFormData,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default SetupContext;

export const SetupState = () => {
  return useContext(Store);
};
