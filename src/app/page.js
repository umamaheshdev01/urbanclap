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
            Top 
            Services
          </h2>
          <p class="copy">
           
          </p>
        </div>

        <div class="flows">
          <div class="flow">
            <div class="flow-copy">
              <h3>Tap Replacement</h3>
              <p>
                Single knob/ inlet old tap replacement with new one (provided by customer)

Procurement of tap, spare parts (at extra cost)
              </p>
            </div>
            <div class="flow-img">
              <img style={{height : '18rem' , borderRadius : '5%'}}
                src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/p7.jpeg.jpg'
              />
            </div>
          </div>
          <div class="flow">
            <div class="flow-copy">
              <h3>Door Lock Replacement</h3>
              <p>Replacement of any kind of door lock Procurement of spare parts (at extra cost)</p>
            </div>
            <div class="flow-img">
              <img style={{height : '18rem' , borderRadius : '5%'}}
               src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/door4.jpeg.jpg'
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
            src="https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/logo_processed.jpg"
            alt="Logo"
          />
        </div>
        <div class="ob-copy">
          <p>
            "Home is where love resides, memories are created, and dreams are nurtured."
          </p>
          <button>Team | ServiceXpress</button>
        </div>
      </div>
    </section>

    {/* <section class="cta-callout">
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
    </section> */}













<Footer></Footer>
    
   </>
  )
}

export default page