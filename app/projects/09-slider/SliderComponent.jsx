import React from 'react'

export default function SliderComponent ({ sliderValue, handleInput }) {
  const sliderStyle = {
    appearance: 'none',
    width: '100%',
    background: 'lightgray',
    padding: '5px',
    borderRadius: '10px',
    cursor: 'pointer'
  }
  return (
    <div className='d-flex flex-column' style={{ gap: 50, width: '100%' }}>
      <input
        type='range'
        style={sliderStyle}
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleInput}
      />

      <div
        className='text-center'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'cyan',
          height: `${sliderValue * 3}px`,
          width: `${sliderValue * 3}px`,
          fontWeight: 600,
          borderRadius: '50%'
        }}
      >
        <span>{sliderValue}</span>
      </div>
    </div>
  )
}
