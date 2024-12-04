import React, { useState } from 'react'
import SliderComponent from './SliderComponent'
import Title from '../components/Title'
export default function SliderApp() {
  const [sliderValue, setSliderValue] = useState(0);
  
  const handleSliderInputValue = (e) => {
    setSliderValue(e.target.value);
  }
  return (
    <div className='container d-flex flex-column' style={{
        marginTop:"15px",
        gap:30,
        fontSize:"20px",
    }}>
      <Title text={"Slide to Grow"}/>
      <SliderComponent sliderValue = {sliderValue} handleInput={handleSliderInputValue}/>
    </div>
  )
}
