import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <Link to="/">Home</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}

export default Header;
