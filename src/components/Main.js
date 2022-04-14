import React from 'react'
import image2 from '../images/airbnb_main.png'
const Main = () => {
  return (
    <main>
        <img src={image2} className='image2'/>
        <h1 className='main--title'>Online Experiences</h1>
        <p className='main--paragraph'>Join unique interactive activities led by one-of-a-kind hosts - 
          all without leaving home.</p>
    </main>
  )
}

export default Main