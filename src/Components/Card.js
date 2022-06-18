import React from 'react'
import AU from './AU.jpg'

function Card() {
  return (
    <div>
      <div className="card mx-3" style={{width: "18rem", float:"right",right:"400px"}}>
  <img src={AU} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Building ID 1085</h5>
    <p className="card-text">Address : Here will come the Address of the building being displayed.</p>
    <a href="#" className="btn btn-primary">Go to Location</a>
  </div>
</div>
    </div>
  )
}

export default Card
