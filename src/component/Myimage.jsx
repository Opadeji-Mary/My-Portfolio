import React from 'react'
import me from '../assets/me.jpg.jpg'
import './Myimage.css'

const Myimage = () => {
    
  return (
<div className="middle">
    <div className="bg-dark d-flex p-5">
        <div className="p-5">
        <div className="p-5 text-white">
          <div className="d-flex">
          <h2 className="">Hi, my name is </h2>
          <h2 className="text-danger">Opadeji Mary</h2> 
          </div>
          <br />
          <div className="text-white">
            <h2 className="d-flex">I'm a Web Developer <h2 className="text-danger">|</h2></h2>
          </div>
          <br /> <br />
          <button className="btn btn-danger col-6">More About Me</button>
        </div>
       
       </div>
        <div className="">
            <div className="container">
              <div className="col-12">
                <div className="round-image mx-auto">
                 <img src={me} alt="" width="400px" className="rounded"></img>
                </div>
             </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Myimage