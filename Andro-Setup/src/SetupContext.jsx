import React, { createContext, useContext, useState } from 'react'

const Store = createContext(null)

const SetupContext = ({children}) => {

    const [homeSetups, setHomeSetups] = useState([]);
    const [singleSetup, setSingleSetup] = useState({});
    const [toggleShowAll, setToggleShowAll] = useState(false);

  return (
    <Store.Provider value={{homeSetups, setHomeSetups, toggleShowAll, setToggleShowAll, singleSetup, setSingleSetup}} >
        {children}
    </Store.Provider>
  )
}

export default SetupContext

export const SetupState = () => {
    return useContext(Store);
}