import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/mrbeast">Mr Beast</Link>
      <Link to="/users/kyliejennert">Jennner</Link>
      <Link to="/users/emmanjnr">Me</Link>
    </nav>
  );
}
export default Nav;
