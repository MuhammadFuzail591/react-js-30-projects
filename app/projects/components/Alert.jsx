/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from './Button'
function Alert({ type, message, delay = false, DelayTime = 3000 }) {

  const [showAlert, setShowAlert] = useState(true)

  function closeAlert(e) {
    e.target.parentElement.parentElement.classList.add('fadeAlert')
    setTimeout(() => {
      setShowAlert(false)
    }, 400)
  }

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false)
      }, DelayTime)
  })
  return (
    showAlert && (
      <div className={`alert alert-${type}`} style={{ width: "50%", margin: "auto", marginTop: "1em" }}>
        <div className='alert-close'>
          <span className='mr-1'>{message}</span>
          <Button btnClass={'btn-close'} text='X' onClick={closeAlert} />
        </div>
      </div>
    )
  )
}

export default Alert
