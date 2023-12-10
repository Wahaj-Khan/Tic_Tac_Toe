import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
  
        <div className='card'>
            <text style={{color: 'black'}}>{props.num}</text>
        </div>
  )
}

export default Card