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
        <img src={image} alt={product} className={styles.image} />
      </div>
      <div className={styles.colRight}>
        <h2 className={styles.product}>{product}</h2>
        <p>
          Price: <span className={styles.price}>${price}</span>{" "}
        </p>
        <div className={styles.btnsContainer}>
          <button
            disabled={quantity === 1}
            onClick={handleDecrease}
            className={
              quantity === 1
                ? `${styles.increaseDecreaseBtn} ${styles.disabled}`
                : styles.increaseDecreaseBtn
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrease}
            className={styles.increaseDecreaseBtn}
          >
            +
          </button>
        </div>
        <button onClick={() => removeFromCart(id)} className="btn btn-danger">
          Remove
        </button>
      </div>
    </li>
  );
}
