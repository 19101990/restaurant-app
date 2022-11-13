import logo from "../../images/logo/logo.jpg"
import "../Footer/Footer.scss"
import { BsFacebook, BsInstagram, BsPinterest, BsFillPhoneFill, BsFillEnvelopeFill } from 'react-icons/bs';


function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logo} alt="Nitin Kitchen" />
      </div>
      <div className="footer__contact">
        <a href="tel:00000000" title="phone"><BsFillPhoneFill /> (0)000 00 000</a>
        <a href="mailto:example@mail.com" title="e-mail"><BsFillEnvelopeFill /> example@mail.com</a>
      </div>
      <div className="footer__address">
        <span>First line</span>
        <span>00-000 Second line</span>
        <span>Third Line</span>
      </div>
      <div className="footer__social">
        <a href="https://facebook.com/" title="Facebook" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://instagram.com/" title="Instagram" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="https://piterest.com/" title="Pinterest" target="_blank" rel="noreferrer"><BsPinterest /></a>
      </div>
      <div className="copyrights">
        <span>&copy; 2022 Nitin Kitchen. All rights reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;