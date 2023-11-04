import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ nrOfCartItems }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <NavLink to="/">Logo</NavLink>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : null
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : null
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : null
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : null
                }
              >
                Cart({nrOfCartItems})
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
