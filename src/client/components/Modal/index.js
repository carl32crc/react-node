import React from 'react'

const Modal = ({ children, open, title, closeModal }) => (
  open ?  
    <div className='modal-container'>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <div className='modal-header'>
          {title}
          <span onClick={() => closeModal()} > X </span>
        </div>
        {children}
      </div>
    </div> : null
)

export default Modal