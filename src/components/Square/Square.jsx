import "./Square.css";
import React from 'react'

const Square = (props) => {
    const {value, onClick } = props
  return (
    <button onClick={onClick} className="square X">
        {value}
    </button>
  )
}

export default Square