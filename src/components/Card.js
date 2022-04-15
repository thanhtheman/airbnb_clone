import React from 'react'
import img2 from '../images2/littlestar.png'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='parent'>
      {props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
      </div>
      <img  src={`../images/${props.img}`} className='card--image'/>
      <span className='city-name'>{props.name}</span>
      <div className='card--stats'>
        <img src={img2} className='card--star'/>
        <span><b>{props.rating}</b> </span>
        <span className='gray'>(<b>{props.reviewCount}</b> Reviews) - </span>
        <span className='gray'>{props.location}</span>
      </div>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <p><span><b> From ${props.price}</b> / person</span></p>
      </div>
      <div className='container-profile'>
      <img  src={`../images/${props.img2}`} className='card-profile-image'/>
      <span className='description'>"{props.description}"</span>
      </div>
    </div>
  )
}

export default Card