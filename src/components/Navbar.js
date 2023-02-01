import logo from "../images/logo.svg";
import PageLInks from "./PageLInks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLInks list="nav-links" link="nav-link" />
        <SocialLinks parentClass="nav-icons" linkClass="nav-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
