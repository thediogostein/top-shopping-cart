import { useOutletContext } from "react-router-dom";
import styles from "./CartItem.module.css";

export default function CartItem({ id, product, image, quantity, price }) {
  const [cart, addToCart, removeFromCart, increaseCartItem, decreaseCartItem] =
    useOutletContext();

  function handleIncrease() {
    increaseCartItem(id);
  }

  function handleDecrease() {
    decreaseCartItem(id);
  }
  return (
    <li className={styles.item}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{product}</h2>
        <p>Price: ${price}</p>
        <div>
          <button disabled={quantity === 1} onClick={handleDecrease}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <div>
        {" "}
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </li>
  );
}
