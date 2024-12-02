import React from 'react'

function Button ({ text = 'Click', btnClass, icon, onClick}) {
  return (
    <button
      className={`btn ${btnClass}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        paddingTop: '0.5em',
        paddingBottom: '0.5em'
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  )
}

export default Button
