import styles from "./CartItem.module.css";

export default function CartItem() {
  return (
    <li className={styles.item}>
      <div>image</div>
      <div>
        <p>Product Name</p>
        <p>Price: $250</p>
        <div>
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
      </div>
    </li>
  );
}
