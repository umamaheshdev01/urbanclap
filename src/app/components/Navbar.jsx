'use client'
import Link from 'next/link';
import '../css/navbar.css'
import { useState } from 'react';
import LoginSignupPopup from './Login';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const auth = localStorage.getItem('auth')

  const [toggle,setToggle] = useState(false)
  const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services/carpenter", text: "Services" },
    { href: "/sample-blog", text: "Sample Blog" },
    { href: "/customers", text: "Customers" },
  ];

  const Stop=()=>{
    setToggle(prev=>!prev)
  }

  const r = useRouter()

  const logout = ()=>{
    localStorage.setItem('auth','000')
    localStorage.setItem('email','0')
        localStorage.setItem('phone','0')
        localStorage.setItem('id','0')
         localStorage.setItem('username','0')
         localStorage.setItem('address','0')

        r.refresh()
  
  }

  return (
    <>

   <>{toggle && <LoginSignupPopup stopit={Stop}></LoginSignupPopup>}</> 
     
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <Link href="/"><img  style={{height : '2.5rem' , width : '2.5rem'}} src='https://xnpbgshwasrramtvbzgx.supabase.co/storage/v1/object/public/servicepics/logo.png'></img></Link>
        </div>
        <div className="navbar-items">
          <input type="checkbox" id="hamburger-toggle" />
          <label htmlFor="hamburger-toggle" className="hamburger-icon">
            <i className="ph-light ph-list"></i>
          </label>
          <ul className="navbar-links">
            {navbarLinks.map((link, index) => (
              <li className="navbar-item" key={index}>
                <Link href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
            <li>
              <div className="btn">
               {auth==='111' || <a onClick={()=>setToggle(prev=>!prev)}>Sign In</a>}
               {auth==='111' && <a onClick={()=>logout()}>Logout</a>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
