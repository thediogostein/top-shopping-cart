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
          <NavLink to="/shop">All</NavLink>
        </li>
        <li>
          <NavLink to="electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="jewelery">Jewelery</NavLink>
        </li>
        <li>
          <NavLink to="men">Men's Clothing</NavLink>
        </li>
        <li>
          <NavLink to="women">Women's Clothing</NavLink>
        </li>
      </ul>
    </nav>
  );
}
