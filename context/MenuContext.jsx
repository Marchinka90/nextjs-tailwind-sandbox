"use client";

import { createContext, useState } from "react"

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toogle = () => {
        setOpen((prev) => !prev);
    }

    return <MenuContext.Provider value={{open, toogle}}>{children}</MenuContext.Provider>
}

export default MenuContextProvider;