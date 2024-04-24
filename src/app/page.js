import React from 'react'
import './css/index.css'
import Navbar from './components/Navbar'

function page() {
  return (
   <>
       <Navbar></Navbar>
     <section className="hero" style={{marginTop: '2rem'}}>
      <div className="container">
        <div className="hero-copy">
          <h1>Empower Your Digital Service <br />Defense. Now.</h1>
          <p>
            Byteforge is a solution designed for businesses aiming to maintain
            their confidential information securely encrypted at all moments.
          </p>
          <button><a href="#">Get Started</a></button>
        </div>
        <div className="hero-img">
          <img src="./assets/hero-img.png" alt="" />
        </div>
      </div>
      </section>
    
   </>
  )
}

export default page