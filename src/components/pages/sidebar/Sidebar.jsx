import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  const BASE_URL = window.location.origin;
  return (
    <div
      className={
        (window.location.href === BASE_URL + "/"
          ? "sidebar hide"
          : "sidebar ") + (menuOpen && "active")
      }
    >
      <button onClick={() => setMenuOpen(false)}>x</button>
      <img
        className="profile-img"
        src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
        alt="profile"
      ></img>
      <br />
      <h3 className="white wellcome">Welcome</h3>
      <h2 className="white name">VanessaC001</h2>
      <a href="pocket-tour-app/editprofile" className="button">
        Edit Profile
      </a>
      <a href="pocket-tour-app/mydocuments" className="button">
        My Documents
      </a>
      <a href="pocket-tour-app/choosedestination" className="button">
        Add Trip
      </a>
      <a href="pocket-tour-app/" className="button">
        Sign Out
      </a>
    </div>
  );
}
