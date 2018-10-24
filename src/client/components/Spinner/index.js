import React from 'react'

const Spinner = ({ visible }) => (
  visible ? 
    <div className='spinner'>
      <div className='dot1'></div>
      <div className='dot2'></div>
    </div> : null
)

export default Spinner