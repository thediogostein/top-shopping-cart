import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
  const [cart] = useOutletContext();
  console.log(cart);
  return (
    <main className="container">
      <section className="section">
        <h1>Cart</h1>
        <ul className={styles.list}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        <p>Total: $189</p>
        <button onClick={() => alert("thank you")}>Checkout</button>
      </section>
    </main>
  );
}
