import { pageLinks } from "../data";

const PageLInks = ({ list, link }) => {
  return (
    <ul className={list} id="nav-links">
      {pageLinks.map(({ href, text, id }) => {
        return (
          <li key={id}>
            <a href={href} className={link}>
              {" "}
              {text}{" "}
            </a>
          </li>
        );
      })}{" "}
    </ul>
  );
};
export default PageLInks;
