import React from 'react'

export default function Input(props) {
const {onChange,title,type,error} = props

  return (
    <>
      <input type={type}
        onChange={onChange}
         placeholder={title}
         required 
         className={error ? "input-box is-invalid": "input-box"}/>
         <div className="invalid-feedback">
         {error}
       </div>   
    </>

  )
}
