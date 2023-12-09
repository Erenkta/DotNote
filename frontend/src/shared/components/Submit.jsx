import React from 'react'
import { Spinner } from './Spinner'

export default function Submit(props) {
    const {disabled,sm,title,apiProgress,onClick,styleType="primary"} = props
  return (
    <div className="text-center">
    <button
      onClick={onClick}
      className={`btn btn-${styleType}`}
      disabled={
        disabled || apiProgress
      }
    >
      {apiProgress && (
        <Spinner sm={sm} />
      )}
        {title}
        
    </button>
  </div> // title yerine {children} da olurdu
  )
}
