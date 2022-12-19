import React from 'react'
import "./cardGym.css"

const GymCard = props => {
  return (
    <>
      <div class='card my-3 pt-2'>
        <div className='m-auto card-img'>
        <img src={props.img} className='card-img-top w-100' alt='gymImage' />
        </div>
        <div className='card-body'>
          <h5 className='card-title fw-bold fs-4'>{props.name}</h5>
           
           {props.special?
          <p className='text-capitalize hot_deals'>hot deals</p>:""}

        </div>
      </div>
    </>
  )
}

export default GymCard
