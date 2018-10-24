import React from 'react'

const AlertMessage = ({ messageColor, visible, message, closeAlert }) => (
  visible ?
    <div style={{color: messageColor}} className='alertMessage'>
      {message}
      <span onClick={() => closeAlert()}>X</span>
    </div> : null
)

export default AlertMessage