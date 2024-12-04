"use client"

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react'
import Blog from '../components/Blog'
// import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import { ThemeContext, themes } from './context/theme-context'

const LightDarkMode = () => {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }
   const docBody = document.body;

  useEffect(() => {
    switch(theme){
      case themes.light:
        docBody.classList.remove("bg-dark")
        docBody.classList.remove("text-light")
        docBody.classList.add("bg-light")
        docBody.classList.add("text-dark")
      break;
      case themes.dark:
        docBody.classList.remove("bg-light")
        docBody.classList.remove("text-dark")
        docBody.classList.add("bg-dark")
        docBody.classList.add("text-light")
      break;
    }
  },[theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Blog />
    </ThemeContext.Provider>
  )
}

export default LightDarkMode
