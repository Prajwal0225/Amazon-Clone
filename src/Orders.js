import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.css'

function Orders() {
  return (
    <div className='orders'>
       <center>
<h1 className='heading'>Your order placed sucessfully!</h1>
</center>
<div className="container">
<div id="box">
  <div className="top"></div>
  <div>
    <span></span>
    <span>
      <i className="tape"></i>
    </span>
    <span></span>
    <span>
      <i className="tape"></i>
    </span>
  </div>
</div>
</div>
<Link style={{textDecoration: 'none'}} to="/">
<center>
<button className="btn">Back to home page</button>
</center>
</Link>
    </div>
  )
}

export default Orders
