import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext()

export function DarkModeProvider ({ children }){
    const [isDarkMode, setDarkMode ] = useState(false)

    const DarkMode = () => {
        setDarkMode((Mode) => !Mode)
    }

    return(
        <DarkModeContext.Provider value = {{isDarkMode, DarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode(){
    return useContext(DarkModeContext)
}