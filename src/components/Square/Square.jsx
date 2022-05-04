import "./Square.css";
import React from 'react'

const Square = (props) => {
    const {value, onclick } = props
  return (
    <button className="square X">
        {value}
    </button>
  )
}

export default Square