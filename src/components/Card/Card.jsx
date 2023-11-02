import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

export default function Card({ id, category, title, image, price, rating }) {
  return (
    <li className={styles.card}>
      <Link to={`${id}`}>
        <article>
          <div className={styles.imgContainer}>
            <img src={image} alt={title} className={styles.img} />
          </div>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>${price}</p>
          <p>{rating.rate} / 5</p>
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
