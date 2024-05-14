import { Form, NavLink } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import logoImage from "../assets/logo.svg";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <div className={classes.navElement}>
        <div className={classes.brand}>
          <img src={logoImage} alt="logo" />
          <NavLink exact to="/">
            <h1>BBocr</h1>
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink>Tools</NavLink>
            </li>
            <li>
              <NavLink>Compress</NavLink>
            </li>
            <li>
              <NavLink>Convert</NavLink>
            </li>
            <li>
              <NavLink>Merge</NavLink>
            </li>
            <li>
              <NavLink>Edit</NavLink>
            </li>
            <li>
              <NavLink>Sign</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.navElement}>
        <div className={classes.elementBorder}>
          <ul>
            <li>
              <NavLink>Pricing</NavLink>
            </li>
            <li>
              <NavLink>Teams</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <NavLink>Log In</NavLink>
            </li>
            <li>
              <NavLink>
                <button>Free Trial</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
