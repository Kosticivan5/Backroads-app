import PageLInks from "./PageLInks.js";
import SocialLinks from "./SocialLinks.js";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLInks list="footer-links" link="footer-link" />
      <SocialLinks parentClass="footer-icons" linkClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
