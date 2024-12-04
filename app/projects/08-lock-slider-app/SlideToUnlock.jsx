import React, { useEffect, useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import LockScreenImg from '../../../public/moon.jpg'
import HomeScreenImg from '../../../public/home.jpg'

function SlideToUnlock () {
  const [showSlider, setShowSlider] = useState(true)
  const [uiProps, setUiProps] = useState({
    uiText:"Swipe to Unlock",
    uiColor:"#eee",
    uiBg:`url(${LockScreenImg.src})  center/cover no-repeat`
  })
  const [lockSliderValue, setLockSliderValue] = useState(0)

  const showLockSliderFunc = (e) => {
    setLockSliderValue(e.target.value)
  }

  const lockScreen = () => {
    setLockSliderValue(0);
    setShowSlider(true);
    setUiProps({
      uiText:"Swipe to Unlock screen",
      uiColor:"#fff",
      uiBg:`url(${LockScreenImg.src})  center/cover no-repeat`
    })
  }  

  useEffect(()=> {
    if(lockSliderValue === "100"){
      setShowSlider(false)
      setLockSliderValue(0)
      setUiProps({
        uiText:"Screen Unlocked",
        uiColor:"#eee",
        uiBg:`url(${HomeScreenImg.src})  center/cover no-repeat`
      })
    }
  },[lockSliderValue])

  return (
    <div
      className='container d-flex flex-column border-20'
      style={{
        height: '70vh',
        marginTop: '15vh',
        width: '340px',
        border: '4px solid black',
        background:uiProps.uiBg,
      }}
    >
      <h1 className='title text-center text-primary'>{uiProps.uiText}</h1>
      {showSlider ? (
        <LockSlider width={'250px'} value={lockSliderValue} handleInput={showLockSliderFunc}/>
      ) : (
        <AiFillUnlock className='unlockIcon' onClick={lockScreen} />
      )}
    </div>
  )
}

export default SlideToUnlock
