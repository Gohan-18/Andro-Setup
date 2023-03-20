import React, { createContext, useContext, useState } from 'react'

const Store = createContext(null)

const SetupContext = ({children}) => {

    const [homeSetups, setHomeSetups] = useState();

  return (
    <Store.Provider value={{homeSetups, setHomeSetups}} >
        {children}
    </Store.Provider>
  )
}

export default SetupContext

export const SetupState = () => {
    return useContext(Store);
}