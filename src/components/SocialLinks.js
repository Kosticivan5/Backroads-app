import { socialLinks } from "../data";

const SocialLinks = ({ parentClass, linkClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
