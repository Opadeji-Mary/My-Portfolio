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
            <h3 className="text-danger">I'm Opadeji Mary Oluwaferanmi and a Web Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis similique facere itaque optio veniam, maxime sunt delectus dolor unde possimus iste officiis autem beatae quaerat in illum aliquid nobis exercitationem.
            Labore maiores porro, necessitatibus laboriosam reprehenderit dolorem animi adipisci dolorum beatae laudantium a repellendus qui aut voluptatibus modi magnam ipsa quam temporibus officiis quaerat tempora fugiat. Reiciendis pariatur amet sint.
            Sunt nihil nam explicabo totam soluta eos minus est deleniti fuga tenetur corrupti molestiae commodi nisi itaque, eius, accusantium fugit deserunt eaque. Pariatur non eveniet hic cupiditate est, quo praesentium.
            Mollitia tempore quos ipsam commodi ratione dolor esse laudantium rerum voluptatibus, ea odit molestiae minima delectus distinctio at beatae? Inventore recusandae beatae dolorum accusamus blanditiis tenetur officiis tempore. Sint, et!
            Quisquam repellat temporibus culpa corrupti rem magnam earum a perferendis asperiores, quas eum, laborum cumque accusamus labore ad distinctio incidunzt aspernatur dolorum eos! Praesentium nemo quibusdam atque. Sint, corporis dolorem?</p>
            <div className="d-flex">
              <div>
              <tr>
             <th>Birthday : </th>
              <td> 16 february</td>
             </tr>
             <hr />
             <tr>
             <th>Website : </th>
              <td>www.domian.com</td>
             </tr>
             <hr />

             <tr>
             <th>Degree :</th>
              <td>IDK</td>
             </tr>
             <hr />

             <tr>
             <th>City :</th>
              <td>Nigeria</td>
             </tr>
             <hr />
              </div>
              
              <div className="ms-5">
              <tr>
             <th>Age:</th>
              <td>16</td>
             </tr>
             <hr />
             <tr>
             <th>Email: </th>
              <td>feranmiopadji@gmail.com</td>
             </tr>
             <hr />

             <tr>
             <th>Phone :</th>
              <td>+2347088962520</td>
             </tr>
             <hr />

             <tr>
             <th>Freelance :</th>
              <td>Unavailable</td>
             </tr>
             <hr />
            </div>
            </div>

            
        </div>
        <div className="d-flex">
        <div>
        <button className="btn btn-danger">Downlaod CV</button>
        </div>
        <div className="ms-5">
          <button className="btn btn-danger">Hire Me</button>
        </div>
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