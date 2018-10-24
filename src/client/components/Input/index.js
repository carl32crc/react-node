import React from 'react'

const Input = ({ onHandleChange }) => (
  <input 
    onChange={(e) => onHandleChange(e.target.value)}
    placeholder='Search' 
    type='text' 
  />
)

export default Input