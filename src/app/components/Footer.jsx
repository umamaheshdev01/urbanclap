import React from 'react'

function Footer() {
  return (
    <>
     <footer>
      <div class="container">
        <div class="f-row footer-links">
          <div class="f-logo">
            <a href="index.html"><img style={{height : '2.5rem' , width : '2.5rem' , top : '1rem' , position : 'relative'}} src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/logo.png'></img>  ServiceXpress</a>
          </div>
          <div class="f-links">
            <div class="f-links-col">
              <p>Compnay</p>

              <a href="./pages/about.html">About</a><br />
              
              <a href="#">Privacy Policy</a><br />
            </div>
            <div class="f-links-col">
              <p>Resources</p>

              <a href="./pages/blog.html">Blog</a><br />
              <a href="#">Docs</a><br />
              <a href="#">Learn</a><br />
            </div>
            <div class="f-links-col">
              <p>Support</p>

              <a href="./pages/pricing.html">FAQ</a><br />
              <a href="#">Contact</a><br />
            
            </div>
            <div class="f-links-col">
              <p>Blog</p>

              <a href="https://medium.com/@servicexpress23/building-dreams-streamlining-construction-labor-with-servicexpress-90c2ef76e561">Building Dreams</a><br />
              <a href="https://medium.com/@servicexpress23/step-into-cleanliness-introducing-servicexpress-s-revolutionary-shoe-cleaning-services-007f4db768f4">Step into Cleanliness</a><br />
              <a href="https://medium.com/@servicexpress23/elevating-cleanliness-the-unparalleled-cleaning-services-by-servicexpress-5e9ae4450bbf">Caring for tommorow's future</a><br />
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="container">
        <div class="f-row f-subscribe">
          <div class="sub-copy">
            <h3>Subscribe to our newsletter</h3>
            <p>Stay informed with the latest updates.</p>
          </div>
          <div class="sub-form">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="container">
        <div class="f-row f-ctext">
          <div class="copy-text">
            <p>© 2024 ServiceXpress Inc. All rights reserved.</p>
          </div>
          <div class="socials">
            <a href="#"><i class="ph-fill ph-instagram-logo"></i></a>
            <a href="#"><i class="ph-fill ph-twitter-logo"></i></a>
            <a href="#"><i class="ph-fill ph-linkedin-logo"></i></a>
            <a href="#"><i class="ph-fill ph-youtube-logo"></i></a>
            <a href="#"><i class="ph-fill ph-tiktok-logo"></i></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer