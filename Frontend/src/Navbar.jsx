import { Link } from 'react-scroll';
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Turisum</div>
      <ul className="Links">
      <li><Link to="Hero" smooth={true} duration={500}>
            Home
          </Link></li>
      <li><Link to="card" smooth={true} duration={500}>
            Place
          </Link></li>
      <li><Link to="Upload" smooth={true} duration={500}>
            Upload
          </Link></li>
      <li><Link to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
