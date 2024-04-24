import React from 'react';
import Navbar from '../components/Navbar';
import '../css/blog.css'

function Page() {
  return (
    <>
      <Navbar />

      <section className='blog-list'>
        <div className="container">
          <h2>Our Services</h2>
          <div className="blog-main">
            <div className="blog-main-img">
              <a href="#">
                <img
                  // src = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D'
                src = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cmljaWFufGVufDB8fDB8fHww'
                  alt="Guide to Secure Enclave Functions"
                />
              </a>
            </div>
            <div className="blog-main-copy">
              <p className="blog-main-tag">Electrician</p>
              <div className="blog-main-title">
                <h2>
                  <a href="./sample-blog.html">Fixing Electrical Appliances</a>
                </h2>
              </div>
              <div className="blog-main-intro">
                <p>
                  Explore the essentials of encryption and the step-by-step
                  process of creating secure functions within enclave
                  environments.
                </p>
              </div>
              <div className="blog-main-author">
                <p>By <i className="ph-fill ph-shield-check"></i> Jonathan Wikk</p>
              </div>
            </div>
          </div>




         









        </div>
      </section>
    </>
  );
}

export default Page;
