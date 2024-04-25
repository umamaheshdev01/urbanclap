import Link from 'next/link';

import '../css/navbar.css'

const Navbar = () => {
  const navbarLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services/carpenter", text: "Services" },
    { href: "/sample-blog", text: "Sample Blog" },
    { href: "/customers", text: "Customers" },
  ];

  return (
    <>
     
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <Link href="/"><i className="ph-fill ph-brain"></i></Link>
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
                <a href="https://www.youtube.com/@codegrid">Sign Up</a>
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
