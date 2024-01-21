import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode: "light",
    lightTheme : () => {},
    darkTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider;

export default function Usetheme(){
    return useContext(ThemeContext);
}