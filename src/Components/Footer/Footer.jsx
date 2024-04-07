import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaFacebookF,
  FaGithub,
} from 'react-icons/fa';
import './Footer.css'; // Make sure to import the CSS file
import logo from '../Footer/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-logo">
        <img src={logo} alt="" className="footer-logo" />
      </div>
      <div className="footer-info">
        <span className="footer-contact">+91-7983956319</span>
        <span className="footer-contact">workwithranjodh@gmail.com</span>
      </div>
      <div className="footer-icons">
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedinIn className="icon" />
        <FaBehance className="icon" />
        <FaFacebookF className="icon" />
        <FaGithub className="icon" />
      </div>
    </div>
  );
};

export default Footer;
