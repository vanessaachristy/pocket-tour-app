import "./header.css"
//mport MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function NavigationBar({menuOpen, setMenuOpen}) {
  return (
    <header className={"header " + (menuOpen && "active")}>
      <button onClick={()=>setMenuOpen(!menuOpen)}>=</button>
      <Link to="/homepage"><a><h1>PENTA</h1></a></Link>
    </header>
  );
}