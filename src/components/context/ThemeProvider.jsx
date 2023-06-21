import React, { createContext, useState } from 'react'

export const ThemeContext= createContext();
const ThemeProvider = (props) => {


    const [theme,setTheme]=useState(true)

  return (
    <ThemeContext.Provider value={{setTheme,theme}}>
       {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
