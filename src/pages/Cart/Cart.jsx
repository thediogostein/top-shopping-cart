import { Link, useOutletContext } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart] = useOutletContext();
  let total;

  useEffect(() => {
    total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <main className="container">
      <section className="section">
        <div className={styles.container}>
          <h1>Cart</h1>
          <ul className={styles.list}>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          {totalPrice ? (
            <p className={styles.total}>
              Total: <span>${totalPrice.toFixed(2)}</span>{" "}
            </p>
          ) : (
            <p>No items</p>
          )}
          {cart.length > 0 && (
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
