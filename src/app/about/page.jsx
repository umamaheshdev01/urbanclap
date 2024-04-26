import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/about.css'
import '../css/index.css'

function page() {
  return (
    <>

    <Navbar></Navbar>
    
     <section class="about-page-copy">
      <div class="container">
        <h2>About us</h2>
        <p>
          ServiceXpress is an innovative online platform designed to revolutionize the way individuals access home services. Our platform offers a comprehensive range of services, spanning from plumbing and electrical work to landscaping and home cleaning. At ServiceXpress, we understand the value of time and the importance of convenience. With just a few clicks, users can effortlessly schedule and book a wide array of home services tailored to their specific needs and preferences.
        </p>

        <div class="c-out"><span>Our Mission</span></div>
        <p>
          Our mission is simple, to revolutionize the home services industry by providing unparalleled convenience, quality, and reliability. We understand that your home is your sanctuary, and you deserve nothing but the best when it comes to taking care of it. That’s why we’ve assembled a team of skilled professionals who are dedicated to exceeding your expectations with every service.
        </p>

        <div class="c-out"><span>Our Vision</span></div>
        <p>
          Our vision is to create a world where every homeowner can easily access top-notch home services with just a few clicks. We envision a future where scheduling a plumber, booking a cleaner, or hiring a handyman is as simple as ordering takeout or hailing a ride. With technology as our ally and customer satisfaction as our compass, we’re determined to make this vision a reality
        </p>



        <div class="c-out"><span>Our Team</span></div>
        <p>
          Alone, we can do so little; together, we can do so much.
        </p>

       
        {/* <div class="about-logos">
          <div class="a-l-row">
            <div class="a-l-logo">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b7e261f238326c629447_braintech.svg"
                alt=""
              />
            </div>
            <div class="a-l-logo">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b83083368fc53b21eec8_BeSound.svg"
                alt=""
              />
            </div>
          </div>
          <div class="a-l-row">
            <div class="a-l-logo">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b846553ad5cddda2c10c_Doobank.svg"
                alt=""
              />
            </div>
            <div class="a-l-logo">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9b83b0d8e975855361f5d_MAKEO.svg"
                alt=""
              />
            </div>
          </div>
        </div> */}

        {/* <div class="about-quote">
          <p>
            “At Byteforge, we empower organizations to safeguard and control
            access to their resources in an era of remote work. We're at the
            forefront of crafting the foundational infrastructure for data
            privacy on the internet.”
          </p>

          <div class="c-out"><span>Brad Johnson | Founder & CEO </span></div>
        </div> */}
      </div>
    </section>

    <section class="cta-callout">
      <div class="container">
        <div class="callout-copy">
          <h2>ServiceXpress</h2>
          <p>
           Connecting you with skilled professionals you can trust.
          </p>
          <button><a href="./pricing.html">Book Now</a></button>
        </div>
      </div>
    </section>
    
    <Footer></Footer>
    </>
  )
}

export default page