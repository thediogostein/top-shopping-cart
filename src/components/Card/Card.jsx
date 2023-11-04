import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

export default function Card({ id, category, title, image, price, rating }) {
  return (
    <li className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}>
        <article>
          <div className={`${styles.imgContainer} mb-4`}>
            <img src={image} alt={title} className={styles.img} />
          </div>
          <p className="category mb-1">{category}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.price}>${price}</p>
          <p className={styles.rate}>{rating.rate} / 5</p>
        </article>
      </Link>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
};
