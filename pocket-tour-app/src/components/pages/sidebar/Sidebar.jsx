import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar({menuOpen, setMenuOpen}) {
  return (
    <div className={"sidebar " + (menuOpen&&"active")}>
      <button onClick={()=> setMenuOpen(false)} className>x</button>
        <img className="profile-img" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="profile"></img><br/>
        <h3 className="white wellcome">Welcome</h3>
        <h2 className="white name">VanessaC001</h2>
        <a href="http://localhost:3000/editprofile" className="button">Edit Profile</a>
        <a href="http://localhost:3000/mydocuments" className="button">My Documents</a>
        <Link to="/choosedestination"><a href="http://localhost:3000/" className="button">Add Trip</a></Link>
    </div>
  );
}