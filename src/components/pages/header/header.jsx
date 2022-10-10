import "./header.css";
//mport MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function NavigationBar({ menuOpen, setMenuOpen }) {
  const BASE_URL = window.location.origin;
  return (
    <header className={"header " + (menuOpen && "active")}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={window.location.href === BASE_URL + "/" ? "button-hide" : ""}
      >
        =
      </button>
      <Link to="/homepage">
        <a>
          <h1>PENTA</h1>
        </a>
      </Link>
    </header>
  );
}
