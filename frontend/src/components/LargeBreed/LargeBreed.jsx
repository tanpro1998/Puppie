import React from 'react'
import "./largeBreed.scss"

const LargeBreed = () => {
  return (
    <div className="large">
      <div className="title">
        <h1>LARGE BREEDS</h1>
      </div>
      <div className="card">
        <div className="card-item">
          <img src="/image/large-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/large-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/large-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
        <div className="card-item">
          <img src="/image/large-dog.jpg" alt="" />
          <span className="name">Name</span>
        </div>
      </div>
    </div>
  )
}

export default LargeBreed