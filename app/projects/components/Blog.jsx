import React, { useContext } from 'react'
import Title from "../components/Title"
import Button from './Button'
import { ThemeContext } from '../07-light-dark-mode/context/theme-context'
function Blog () {

  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='container my-3 p-1'>
      <Title text={`My Blog with ${theme} Theme`} classes={"fs-xxl"}/>
      <span style={{
        position:"absolute",
        top:10,
        right:10
      }}>
        <Button text={theme === 'dark' ? "Light": "Dark" } btnClass={theme === "dark" && "btn-light"} onClick={toggleTheme}/>
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore
        fugiat nihil! Ipsum quibusdam eaque rem, debitis veritatis dicta
        voluptatibus facere beatae ullam, iusto rerum. Necessitatibus sed nobis
        id nisi.
      </p>
    </div>
  )
}

export default Blog
