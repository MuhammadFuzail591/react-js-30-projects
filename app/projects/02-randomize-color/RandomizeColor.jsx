"use client"
import React from 'react'
import Title from '../components/Title'
function RandomizeColor() {

    // const handleClick = () => {
    //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //     const color = `#${randomColor}`;
    //     document.body.style.backgroundColor = color;
    // }

    const handleClick = (e) => {
      console.log(e.target.value);
      // console.log(getRandomColor())

      document.body.style.backgroundColor = getRandomColor();
      e.target.style.backgroundColor = getRandomColor();
    }

    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)]
        }


        return color;

    }
  return (
    <div className='container m-auto text-center'>
        <Title text={"Randomize Color"} classes={"mb-4"}/>

        <button className='btn btn-danger' onClick={(e) => handleClick(e)}>Click Me</button>
        <button className='btn btn-success' onClick={(e) => handleClick(e)}>Click Me</button>
        <button className='btn btn-primary' onClick={(e) => handleClick(e)}>Click Me</button>
        <button className='btn btn-warning' onClick={(e) => handleClick(e)}>Click Me</button>

    </div>
  )
}

export default RandomizeColor