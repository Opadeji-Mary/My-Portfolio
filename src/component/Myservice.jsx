import React from 'react'
import dev from '../assets/code-s-slash-line.svg'
import crop from '../assets/crop-line.svg'
import app from '../assets/app-store-line.svg'
import './Myservice.css'

const Myservice = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-center">My Service</h1>  
      </div>x
<div className="all">
<div className="row ms-5">
  <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <div><img src={dev} alt="" width="50px" /></div>
        <h5 className="card-title">Web Design</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className="btn btn-danger">learn more</button>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <div><img src={crop} alt="" width="50px"  /></div>
        <h5 className="card-title">UI/UX Design</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className="btn btn-danger">learn more</button>
      </div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <div><img src={app} alt="" width="50px" /></div>
        <h5 className="card-title">App Design</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className="btn btn-danger">learn more</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Myservice