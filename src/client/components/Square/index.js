import React from 'react'

const Square = ({ data, name, image, openModal }) => (
  <li onClick={() => openModal(data)} className='square-item'>    
    
    <span className='square-name'>
      {name}
    </span>
    
    <div className='square-image grid-only'>
      <img src={image} />
    </div>
    
  </li>
)

export default Square