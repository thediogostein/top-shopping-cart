import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CategoryNav.module.css";

export default function CategoryNav() {
  const { data } = useFetch("products/categories");
  console.log(data);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/shop"
            end
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="electronics"
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="jewelery"
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="men"
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="women"
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          >
            Women's Clothing
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
