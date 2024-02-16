import React from 'react'

const Heading = ({title, className}) => {
  return (
    <h1 className={` font-bold ${className}`}>{title}</h1>
  )
}

export default Heading