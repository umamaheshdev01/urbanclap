import React from 'react'
import './css/index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function page() {
  return (
   <>
       <Navbar></Navbar>
     <section className="hero" style={{marginTop: '1rem'}}>
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




    <section class="why-pro">
      <div class="container">
        <h2>Why Byteforge</h2>
        <p class="copy">
          We construct, oversee, and integrate security protocols into our
          platform, sparing you the effort. Byteforge is designed with security
          as a fundamental feature.
        </p>

        <div class="divider"></div>

        <div class="benefits">
          <div class="col">
            <div class="benefit">
              <h3><i class="ph-fill ph-atom"></i> Effortless Alignment</h3>
              <p>
                Byteforge assists organizations in adopting security measures
                mandated by compliance frameworks and legal requirements,
                including CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3>
                <i class="ph-fill ph-bug-droid"></i> Comprehensive Security
              </h3>
              <p>
                Byteforge enables entities to enforce security mandates
                essential for adherence to compliance standards and regulatory
                obligations such as CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3><i class="ph-fill ph-database"></i> Data Enclaves</h3>
              <p>
                Byteforge aids firms in establishing security protocols
                requisite for compliance with regulatory frameworks and statutes
                like CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="benefit">
              <h3>
                <i class="ph-fill ph-codesandbox-logo"></i> Unparalleled Speed
              </h3>
              <p>
                Byteforge supports businesses in implementing necessary security
                controls for compliance with standards and laws such as CPRA,
                GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3><i class="ph-fill ph-disc"></i> Advanced Filtering</h3>
              <p>
                Byteforge provides assistance to companies in deploying security
                measures required for compliance with regulations and frameworks
                like CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3><i class="ph-fill ph-git-diff"></i> Egress Filtering</h3>
              <p>
                Byteforge helps organizations to enforce security requirements
                necessary for conformance to compliance schemes and regulatory
                laws such as CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="benefit">
              <h3>
                <i class="ph-fill ph-github-logo"></i> Dependable Infrastructure
              </h3>
              <p>
                Byteforge aids in equipping companies with security controls
                imperative for compliance to regulatory frameworks and
                legislations like CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3>
                <i class="ph-fill ph-puzzle-piece"></i> Intelligent Device
              </h3>
              <p>
                Byteforge assists in the implementation of security measures
                critical for adherence to compliance protocols and legal
                statutes such as CPRA, GDPR, PCI DSS, and SOC 2.
              </p>
            </div>

            <div class="benefit">
              <h3>
                <i class="ph-fill ph-tree-structure"></i> Seamless Integration
              </h3>
              <p>
                Byteforge supports firms in applying security controls necessary
                for compliance with regulatory standards and laws like CPRA,
                GDPR, PCI DSS, and SOC 2.
              </p>
            </div>
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