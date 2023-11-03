import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Product.module.css";
import { useState } from "react";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { data, error, loading } = useFetch(`products/${productId}`);
  const { title, description, price, category, image } = data;
  const [setCart] = useOutletContext();

  function handleQuantity(e) {
    setQuantity(e.target.value);
    // atualiza o carrinho
  }

  function handleSubmit(e) {
    e.preventDefault();
    const product = { productId, quantity };
    console.log(product);
  }

  const navigate = useNavigate();

  return (
    <main className="container">
      <section className="section">
        <button onClick={() => navigate(-1)}>Go back</button>

        {loading && <p>...loading</p>}
        {error && <p>{`There is a problem fetching the product data`}</p>}
        {!error && !loading && (
          <div className={styles.cols}>
            <div className={styles.colLeft}>
              {" "}
              <img src={image} alt={title} />
            </div>
            <div className={styles.colRight}>
              <p className="category">{category}</p>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>${price}</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="quantity" className={styles.label}>
                    Quantity
                  </label>
                  <select
                    name="quantity"
                    id="quantity"
                    className={styles.dropdown}
                    onChange={handleQuantity}
                    value={quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <button type="submit" className={styles.btn}>
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
