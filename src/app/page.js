import React from 'react'
import './css/index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'


function page() {
  return (
   <>


   

     <Navbar></Navbar>
   
      
     <section className="hero puran" >
      <div className="container">
        <div className="hero-copy">
          <h1>Service At<br /> Your Doorstep</h1>
          <p>
            Unlock the door to endless possibilities with our new service.Let us empower to achieve more, explore more and live more fully.
          </p>
       <Link href='/services/carpenter'><button>Book Now</button></Link>   
        </div>
        <div className="hero-img">
          <img style={{borderRadius : '2%' , height:'24rem'}} src="https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/se.jpg" alt="" />
        </div>
      </div>
      </section>



      <section class="clients">
      <div class="container">
        <p style={{fontSize : '2rem'}}>
          Partner with us.
        </p>
        <div class="client-logos">
          <img style={{height : '10rem', width : '15rem'}}
           src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/home.jpg?t=2024-04-26T17%3A23%3A03.234Z'
          />
         
        </div>
      </div>
    </section>



      <section class="cta-1">
      <div class="container">
        <div class="col">
          <p id="callout">New Services</p>
          <h2>Develop and <br />work together.</h2>
          <p class="copy">
            Transform your home with our comphrensive range of professional home services.
          </p>
         <Link href='/services/carpenter'><button>Explore</button></Link>   
        </div>
        <div class="col">
          <img style={{ borderRadius : '5%' }} src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/1234567.jpg' alt="" />
        </div>
      </div>
    </section>




    <section class="why-pro">
      
      <div class="container">
        <h2>ServiceXpress</h2>
        <p class="copy">
         Transform your home with our comphrensive range of professional home services.
        </p>

        <div class="divider"></div>

        <div class="benefits">
          <div class="col">
            <Link href='/services/electrician'>
            <div class="benefit">
              <h3><i class="ph-fill ph-lightning"></i> Electrician</h3>
              <p>
                Powerup your life with reliable electricity service from keeping your home lit to charging your devices.
              </p>
            </div>
            </Link>



          <Link href='/services/plumber'>
            <div class="benefit">
              <h3>
                <i class="ph-fill ph-drop-half-bottom"></i> Plumbing
              </h3>
              <p>
               Need a reliable plumber ? Look no further ! Our team is here to tackle all your plumbing needs with expertise and efficiency.
              </p>
            </div>
            </Link>

         <Link href='/services/carpenter'>
            <div class="benefit">
              <h3><i class="ph-fill ph-hammer"></i> Carpenter</h3>
              <p>
                Need a reliable carpenter ? Look no further ! Our team is here to tackle all your carpentery needs with expertise and efficiency. 
              </p>
            </div>
         </Link>
          </div>

          <div class="col">

            <Link href='/services/cleaning'>
            <div class="benefit">
              <h3>
                <i class="ph-fill ph-spray-bottle"></i> Cleaning Services
              </h3>
              <p>
                  Need a reliable maid ? Look no further ! Our team is here to tackle all your cleaning needs with expertise and efficiency. 
              </p>
            </div>
            </Link>


         <Link href='/services/tutor'>
            <div class="benefit">
              <h3><i class="ph-fill ph-book"></i> Tutor</h3>
              <p>
                 Need a reliable tutor ? Look no further ! Our team is here to tackle all your doubts needs with expertise and efficiency. 
              </p>
            </div>
            </Link>



         <Link href='/services/painter'>
            <div class="benefit">
              <h3><i class="ph-fill ph-paint-roller"></i> Painter</h3>
              <p>
                  Need a reliable painter ? Look no further ! Our team is here to tackle all your painting needs with expertise and efficiency. 
              </p>
            </div>
          </Link>
          </div>
        

          <div class="col">

            <Link href='/services/carwash'>
                     <div class="benefit">
              <h3>
                <i class="ph-fill ph-car"></i> Car wash
              </h3>
              <p>
                Want your ride to sparkle like new? Our professional car wash service is here to make it happen! 
              </p>
            </div>
            </Link>
     

          <Link href='/services/babysitter'>
             <div class="benefit">
              <h3>
                <i class="ph-fill ph-baby-carriage"></i> Baby Sitting
              </h3>
              <p>
                Babysitting isn't just about watching the kids; it's about joining them in their world of wonder and discovery.
              </p>
            </div>
          </Link>
           

          <Link href='/services/salon'>
            <div class="benefit">
              <h3>
                <i class="ph-fill ph-hair-dryer"></i> Salon
              </h3>
              <p>
               Transforming hair one snip at a time, because beauty begins the moment you decide to be yourself.
              </p>
            </div>
            </Link>

            

          
          </div>
        </div>
      </div>
    </section>

    <section class="first-workflow">
      <div class="container">
        <div class="center">
          <h2>
            Developer-centric <br />
            workflow
          </h2>
          <p class="copy">
            Develop your monitoring tools locally, validate them through CI
            previews, and implement them in your live environment.
          </p>
        </div>

        <div class="flows">
          <div class="flow">
            <div class="flow-copy">
              <h3>Validate & Execute</h3>
              <p>
                Byteforge Functions enable the execution of logic and processes,
                handling tasks on entirely encrypted data through the use of
                secure serverless functions available in Node.js or Python.
              </p>
            </div>
            <div class="flow-img">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9d2f8ea0a30cccb029ecf_code-cages.png"
                alt=""
              />
            </div>
          </div>
          <div class="flow">
            <div class="flow-copy">
              <h3>Implement</h3>
              <p>
                Implement your comprehensive testing and monitoring systems via
                the command line, in tandem with your app deployments.
              </p>
            </div>
            <div class="flow-img">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64b9d05542f7724f06dd1572_code-functions.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="first-workflow">
      <div class="container">
        <div class="center">
          <h2>Streamlined Setup Process</h2>
          <p class="copy">
            Program your monitoring locally, verify your deployments in CI, and
            keep tabs on your production environment.
          </p>
        </div>

        <div class="flow flow-lg">
          <div class="flow-copy">
            <h3>Initialization & Cleanup</h3>
            <p>
              Securely sign requests, acquire authentication tokens, and execute
              your scripts before and after performing your API checks.
            </p>
            <button><a href="#">Explore Documentation</a></button>
          </div>
        </div>

        <div class="flows">
          <div class="flow flow-sm-img">
            <div class="flow-copy">
              <h3>Examine & Confirm</h3>
              <p>
                Byteforge Functions enable the execution of logic and workflows
                on entirely encrypted data through secure serverless functions
                available in Node.js or Python.
              </p>
            </div>
            <div class="flow-img">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64baf294c81b94329c92fcb0_inboud-outbound.png"
                alt=""
              />
            </div>
          </div>
          <div class="flow flow-sm-rev">
            <div class="flow-copy">
              <h3>Implement</h3>
              <p>
                Implement your comprehensive testing and monitoring system via
                command line in tandem with your app deployments.
              </p>
            </div>
            <div class="flow-img">
              <img
                src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64baf5c1df5796b0a349d5d8_SDKs-icons.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="onebit">
      <div class="container">
        <div class="ob-logo">
          <img
            src="https://assets.website-files.com/64b936c88eb5ddace1f89459/64baf8e4ce670fe74ce66a16_onebit-color.svg"
            alt=""
          />
        </div>
        <div class="ob-copy">
          <p>
            "Byteforge played a pivotal role in bolstering our security
            measures, enabling us to attract and secure contracts with larger
            entities that prioritize security."
          </p>
          <button>John Smith | Chief Technology Officer</button>
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
          <button><a href="./pages/pricing.html">Begin Now</a></button>
        </div>
      </div>
    </section>













<Footer></Footer>
    
   </>
  )
}

export default page