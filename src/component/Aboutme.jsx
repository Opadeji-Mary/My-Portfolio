import React from 'react'
import image from '../assets/2me.jpeg'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className="d-flex p-5">
        <div className="">
            <div className="container">
              <div className="">
                <div className="">
                 <img src={image} alt="" width="500px" className="rounded"></img>
                </div>
             </div>
            </div>
        </div>
       <div>
       <div>
            <h1 className="text-center">About Me</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis similique facere itaque optio veniam, maxime sunt delectus dolor unde possimus iste officiis autem beatae quaerat in illum aliquid nobis exercitationem.
            Labore maiores porro, necessitatibus laboriosam reprehenderit dolorem animi adipisci dolorum beatae laudantium a repellendus qui aut voluptatibus modi magnam ipsa quam temporibus officiis quaerat tempora fugiat. Reiciendis pariatur amet sint.
            Sunt nihil nam explicabo totam soluta eos minus est deleniti fuga tenetur corrupti molestiae commodi nisi itaque, eius, accusantium fugit deserunt eaque. Pariatur non eveniet hic cupiditate est, quo praesentium.
            Mollitia tempore quos ipsam commodi ratione dolor esse laudantium rerum voluptatibus, ea odit molestiae minima delectus distinctio at beatae? Inventore recusandae beatae dolorum accusamus blanditiis tenetur officiis tempore. Sint, et!
            Quisquam repellat temporibus culpa corrupti rem magnam earum a perferendis asperiores, quas eum, laborum cumque accusamus labore ad distinctio incidunt aspernatur dolorum eos! Praesentium nemo quibusdam atque. Sint, corporis dolorem?</h4>
        </div>
        <div className="tab-titles">
            <p className="tab-links active-link">Skills</p>
            <p className="tab-links active-link">Experiences</p>
            <p className="tab-links active-link">Education</p>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>   
        </div>
       </div>
    </div>
  )
}

export default Aboutme