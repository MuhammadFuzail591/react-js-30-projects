/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
function HiddenSearchApp () {
  const [uiProps, setUiProps] = useState({
    bg: 'brown',
    inputOpacity: '0',
    showSearchIcon: true,
    showSearchBar:false,
    shadow: '',
    transitions: 'all 0.3s ease-in-out'
  })
  let body = document.body.style

  const inputStyles = {
    margin: '10vh 50%',
    transform: 'translate(-50%)',
    padding: '5px 10px',
    border: 'none',
    fontSize: '1rem',
    borderBottom: '2px solid #000',
    outline: 'none',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '0.2rem',
    background: 'transparent',
    color: '#fff' 
  }
  const searchBarStyles = {
    fontSize: '2.5rem',
    position: 'absolute',
    top: 20,
    right: 40,
    cursor: 'pointer',
    color: '#eee',
    fontWeight: 'bold'
  }

  const inputEl = useRef(null)

  function showSearch () {
    setUiProps({
      showSearchBar:true,
      showSearchIcon: false
    })
  }
  useEffect(() => {
    body.boxShadow = uiProps.shadow
    body.background = uiProps.bg
    body.transition = uiProps.transitions
    
    uiProps.showSearchBar && inputEl.current.focus()
  }, [uiProps.shadow],[uiProps.showSearchBar])

  function handleSearchFocus () {
    setUiProps({
      showSearchBar:true,
      shadow: 'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)'
    })
  }
  function handleSearchBlur () {
    setUiProps({
      shadow: '',
      showSearchBar:false,
      showSearchIcon: true
    })
  }
  return (
    <div className='container' style={{ height: '100vh' }}>

      {uiProps.showSearchIcon ? (
        <BsSearch style={searchBarStyles} onClick={showSearch} />
      ) : <input
      type='text'
      placeholder='Search'
      style={inputStyles}
      onFocus={handleSearchFocus}
      onBlur={handleSearchBlur}
      ref={inputEl}
    />}
    
    </div>
  )
}

export default HiddenSearchApp
