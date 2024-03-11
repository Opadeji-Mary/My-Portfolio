import React from 'react'
import me from '../assets/me.jpg.jpg'
import './Myimage.css'

const Myimage = () => {
    
  return (
<div className="middle">
    <div className="bg-dark d-flex p-5">
        <div className="p-5">
         <div className="text-white">
            <h1 className="ms-5">A Web Developer</h1>
          </div>
        <div className="p-5 text-white">
          <h2 className="d-flex">Hi, I'm
          <h2 className="text-danger">Mary</h2>
          </h2>
          <h2 className="">Opadeji Mary Oluwaferanmi From Nigeria</h2>
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