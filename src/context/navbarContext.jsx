import { createContext, useContext, useState } from "react";

const NavbarContext = createContext()

export function NavbarProvider ({ children }){
    const [isNavbar, setNavbar ] = useState(false)

    const Navbar = () => {
        setNavbar((activate) => !activate)
    }

    return(
        <NavbarContext.Provider value = {{isNavbar, Navbar }}>
            {children}
        </NavbarContext.Provider>
    )
}

export function useNavbar(){
    return useContext(NavbarContext)
}