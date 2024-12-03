import React from 'react'

export default function DefaultLayout(props) {
  return (
    <div>
      <div className='header bs1'>
         <div className='d-flex justify-content-between'>
        <h1>CarHub</h1>
        
         </div>
      </div>
      <div className='context'>
         {props.children}
      </div>
    </div>
  )
}
