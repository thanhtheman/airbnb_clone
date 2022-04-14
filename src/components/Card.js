import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <img  src={props.img1} className='card--image'/>
      </div>
      <div className='card--stats'>
        <img src={props.img2} className='card--star'/>
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) - </span>
        <span className='gray'>{props.country}</span>
      </div>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <p><span><b> From ${props.price}</b> / person</span></p>
      </div>
    </div>
  )
}

export default Card