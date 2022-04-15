import React from 'react'
import image2 from '../images2/airbnb_main.png'
const Main = () => {
  return (
    <main>
        <img src={image2} className='image2'/>
        <h1 className='main--title'>Amazing Experiences</h1>
        <p className='main--paragraph'>Join unique interactive activities led by one-of-a-kind tour guides - 
          start your next adventure NOW.</p>
    </main>
  )
}

export default Main