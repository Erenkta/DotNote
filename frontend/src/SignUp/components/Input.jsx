import React from 'react'

export default function Input(props) {
const {onChange,title,type,id} = props

  return (
     <input type={type}
        onChange={onChange}
         placeholder={title}
         required 
         className="input-box"/>
  )
}
