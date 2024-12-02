"use client"
import { useState } from 'react'
import Button from '../components/Button'

export default function TemperatureControllerApp () {
  const [temperature, setTemperature] = useState(10)
  return (
    <div className='container mt-3 text-center'>
      <div
        className='card bg-light m-auto'
        style={{
          width: 200
        }}
      >
        <h1
          className={`card border-50 ${
            temperature > 0 ? 'bg-danger' : 'bg-info'
          }`}
          style={{
            height: 200,
            width: 200,
            border: '2px solid #666'
          }}
        >
          {temperature + ' °C'}
        </h1>

        <div className='d-flex my-2'>
          <Button
            text='-'
            btnClass={'btn-lg'}
            icon={''}
            onClick={() => {
              setTemperature(temperature - 1)
            }}
          />
          <Button
            text='+'
            btnClass={'btn-lg'}
            icon={''}
            onClick={() => {
              setTemperature(temperature + 1)
              console.log('run')
            }}
          />
        </div>
      </div>
    </div>
  )
}
