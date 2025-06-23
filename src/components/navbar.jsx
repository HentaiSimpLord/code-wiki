import { Link } from "react-router-dom";
import "./styles/navbar.scss";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li id="logo">
          <Link to="/">
            <img src="../../public/logo.png" alt="LOGO" />
          </Link>
        </li>
        <li id="search">
          <Link to="/search">🔎</Link>
        </li>
      </ul>
    </nav>
  );
};
