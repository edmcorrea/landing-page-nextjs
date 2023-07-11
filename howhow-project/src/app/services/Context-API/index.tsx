'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
  company: boolean,
    setCompany: Dispatch<SetStateAction<boolean>>,
}

const GlobalContext = createContext<ContextProps>({
  company: true,
  setCompany: (): boolean => true,
})

export const GlobalContextProvider = ({ children }: any) => {
    const [company, setCompany] = useState(true);
    
    return (
        <GlobalContext.Provider value={{ company, setCompany }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);