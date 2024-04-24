import React from 'react'
import './css/index.css'
import Navbar from './components/Navbar'

function page() {
  return (
   <>
       <Navbar></Navbar>
     <section className="hero" style={{marginTop: '1.5rem'}}>
      <div className="container">
        <div className="hero-copy">
          <h1>Empower Your Digital  <br />Defense. Now.</h1>
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



      <section class="clients">
      <div class="container">
        <p>
          Organizations around the globe rely on Byteforge to ensure their
          databases are protected and meet regulatory standards.
        </p>
        <div class="client-logos">
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b7e261f238326c629447_braintech.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b81bcb329e5162eb7e55_IDNN.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b826aec053d895d6412d_onebit.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b83083368fc53b21eec8_BeSound.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b83b0d8e975855361f5d_MAKEO.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b846553ad5cddda2c10c_Doobank.svg"
            alt=""
          />
        </div>
      </div>
    </section>



      <section class="cta-1">
      <div class="container">
        <div class="col">
          <p id="callout">API Surveillance</p>
          <h2>Develop and <br />work together.</h2>
          <p class="copy">
            Employ any Continuous Integration platform to work in tandem with
            your team on writing, testing, and implementing end-to-end browser
            and API tests.
          </p>
          <button><a href="#">Get a Demo</a></button>
        </div>
        <div class="col">
          <img src="./assets/cta-1.png" alt="" />
        </div>
      </div>
    </section>









    
   </>
  )
}

export default page