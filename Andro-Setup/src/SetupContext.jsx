import React, { createContext, useContext } from 'react'

const Store = createContext()

const SetupContext = ({children}) => {

    

  return (
    <Store.Provider value={{}} >
        {children}
    </Store.Provider>
  )
}

export default SetupContext

export const SetupState = () => {
    return useContext(Store);
}