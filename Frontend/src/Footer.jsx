import "./Footer.css";

const Footer = () => {
  return (
    <section id = 'contact'>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Discover the best tourist places with our platform. Your journey to
            explore begins here.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: soorajkrishnakp2002@gmail.com</li>
            {/* <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City</li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
                <a href="https://www.linkedin.com/in/sooraj-krishna-k-p-9030642b1/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Sooraj-krishna" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/s_o_o_r_a_j__0_4/?hl=en" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Turisum. All Rights Reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
