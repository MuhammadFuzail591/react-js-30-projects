'use client'
import { React, useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

function TestimonialApp () {
  const [testimonial, setTestimonial] = useState("")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonial}`)
      .then(response => response.json())
      .then((data) => setItems(data))
  }, [testimonial])
  console.log(items)
  return (
    <div>
      <Title text={'Testimonial App'}/>
      <Button
        text='Posts'
        btnClass=' btn-info'
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonial('Posts')}
      />
      <Button
        text='Users'
        btnClass=' btn-info'
        icon={<FaUserAlt />}
        onClick={() => setTestimonial('Users')}
      />
      <Button
        text='Comments'
        btnClass=' btn-info'
        icon={<BiCommentDetail />}
        onClick={() => setTestimonial('Comments')}
      />

      <Title
        text={!testimonial ? 'Select from above' : testimonial}
        classes={'subtitle text-primary'}
      />

      <div className='card card'>
        {!items
          ? null
          : items.map((item) => (
              <div key={item.id} className='card card-primary mb-2 ' style={{ width: '80%' }}>
                {item.name && <h2 className='card-header'>{item.name}</h2>}
                <div className='card-body'>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
                {item.email && (
                    <small className='card-header'>{item.email}</small>
                )}
              </div>
            ))}
      </div>
    </div>
  )
}

export default TestimonialApp
