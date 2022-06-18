import React from 'react'
import AU from './AU.jpg'

function Jumbo() {
  return (
    <div>
      <div class="card bg-dark text-white">
  <img src={AU} class="card-img" alt="..." />
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </div>
  )
}

export default Jumbo
