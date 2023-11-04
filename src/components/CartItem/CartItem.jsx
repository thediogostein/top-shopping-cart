import styles from "./CartItem.module.css";

export default function CartItem({ id, product, image, quantity, price }) {
  return (
    <li className={styles.item}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{product}</h2>
        <p>Price: ${price}</p>
        <div>
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
      </div>
      <div>
        {" "}
        <button>Remove</button>
      </div>
    </li>
  );
}
