import React from 'react'

function Footer() {
  return (
    <>
     <footer>
      <div class="container">
        <div class="f-row footer-links">
          <div class="f-logo">
            <a href="index.html"><i class="ph-fill ph-brain"></i> Byteforge</a>
          </div>
          <div class="f-links">
            <div class="f-links-col">
              <p>Compnay</p>

              <a href="./pages/about.html">About</a><br />
              <a href="./pages/pricing.html">Pricing</a><br />
              <a href="./pages/customers.html">Customers</a><br />
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
              <a href="#">Login</a><br />
            </div>
            <div class="f-links-col">
              <p>Blog</p>

              <a href="./pages/sample-blog.html">Innovative Trends</a><br />
              <a href="./pages/sample-blog.html">Future of Security</a><br />
              <a href="./pages/sample-blog.html">Efficient Practices</a><br />
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="container">
        <div class="f-row f-subscribe">
          <div class="sub-copy">
            <h3>Subscribe to our newsletter</h3>
            <p>Stay informed with the latest in cybersecurity.</p>
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
            <p>© 2024 Byteforge Inc. All rights reserved.</p>
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