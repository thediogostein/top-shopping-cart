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
        <h1>Cart</h1>
        <ul className={styles.list}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        {total ? <p>Total: ${totalPrice.toFixed(2)}</p> : <p>No items</p>}

        {cart.length > 0 && <Link to="/checkout">Checkout</Link>}
      </section>
    </main>
  );
}
