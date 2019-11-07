import React from 'react'
import './scroll.css'

const Scroll = (props) => {
  return (
    <div
      className='scrollbar'
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '500px',
      }}>
      {props.children}
    </div>
  )
}

export default Scroll
