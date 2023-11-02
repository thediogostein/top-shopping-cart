import styles from "./Shop.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h1>Shop</h1>
          <CategoryNav />
          <Outlet />
        </div>
      </div>
    </main>
  );
}
