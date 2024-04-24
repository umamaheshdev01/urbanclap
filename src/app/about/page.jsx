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
          Byteforge is a developer-centric security enterprise offering
          encryption solutions through APIs, supported by notable investors such
          as Tiger Capital, Sharp Stone, and IEX Ventures.
        </p>

        <div class="c-out"><span>Our Genesis</span></div>
        <p>
          Founded in 2019, Byteforge was born out of the urgent need to address
          data privacy concerns that businesses encounter. Acknowledging the
          flawed nature of the internet, our aim is to mitigate the risk of data
          being compromised in its raw form by simplifying encryption for
          developers across the globe.
        </p>

        <div class="c-out"><span>Our Vision</span></div>
        <p>
          Byteforge is on a quest to achieve universal web encryption.
          Statistics reveal a grim reality: less than 75% of organizations have
          faced a cloud data breach in the last two years, with a significant
          portion experiencing multiple incidents. In an era where data breaches
          have become the norm, our mission has never been more critical.
        </p>

        <div class="c-out"><span>Our Team</span></div>
        <p>
          The Byteforge team boasts a diverse array of professionals, including
          alumni from tech giants like Google, Salesforce, and Oracle, as well
          as talents from unconventional paths. Regardless of their background,
          each member is integral in developing superior encryption services for
          our clientele.
        </p>

        <div class="c-out"><span>Our Workspace</span></div>
        <p>
          While Austin, Texas, serves as our hub, Byteforge champions a flexible
          work culture, offering remote work options to our employees.
          Nevertheless, we value face-to-face interactions and strive to foster
          a cohesive company culture through regular office engagements.
        </p>

        <div class="c-out"><span>Our Backers</span></div>
        <p>
          Byteforge is fortunate to have the backing of eminent investors known
          for their involvement in pioneering, industry-leading ventures. Their
          belief in our mission is a testament to our potential.
        </p>

        <div class="about-logos">
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
        </div>

        <div class="about-quote">
          <p>
            “At Byteforge, we empower organizations to safeguard and control
            access to their resources in an era of remote work. We're at the
            forefront of crafting the foundational infrastructure for data
            privacy on the internet.”
          </p>

          <div class="c-out"><span>Brad Johnson | Founder & CEO </span></div>
        </div>
      </div>
    </section>

    <section class="cta-callout">
      <div class="container">
        <div class="callout-copy">
          <h2>Secure confidential information</h2>
          <p>
            Mitigate data breach risks and achieve regulatory compliance
            effortlessly, bypassing conventional complexities.
          </p>
          <button><a href="./pricing.html">Begin Now</a></button>
        </div>
      </div>
    </section>
    
    <Footer></Footer>
    </>
  )
}

export default page