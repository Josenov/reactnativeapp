import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({children}) => {

    const [isLogged, setIsLogged]=useState(false);

    const [user, setUser]=useState(null);

    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{

        

    }, [])

    return (
        
        <GlobalContext.Provider
        value={{}}
        
        >
            {children}
        </GlobalContext.Provider>
    )
}