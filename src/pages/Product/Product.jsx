import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Product.module.css";

export default function Product() {
  const { productId } = useParams();

  const { data, error, loading } = useFetch(`products/${productId}`);
  const { title, description, price, category, image } = data;

  return (
    <main className="container">
      <section className="section">
        <Link to="/shop">Back to products</Link>

        {loading && <p>...loading</p>}
        {error && (
          <p>{`There is a problem fetching the product data &{error}`}</p>
        )}
        <div className={styles.cols}>
          <div className={styles.colLeft}>
            {" "}
            <img src={image} alt={title} />
          </div>
          <div className={styles.colRight}>
            <p>{category}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
