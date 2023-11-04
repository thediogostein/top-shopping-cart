import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Product.module.css";
import { useEffect, useState } from "react";

export default function Product() {
  const [productQuantity, setProductQuantity] = useState(1);
  const { productId } = useParams();
  const { data, error, loading } = useFetch(`products/${productId}`);
  const { title, description, price, category, image } = data;
  const [cart, addToCart] = useOutletContext();
  const [showMessage, setShowMessage] = useState(false);

  function handleQuantity(e) {
    setProductQuantity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const item = {
      id: parseInt(productId),
      product: title,
      image,
      quantity: parseInt(productQuantity),
      price,
    };
    addToCart(item);
    setShowMessage(true);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 1600);

    return () => clearTimeout(timeoutId);
  }, [showMessage]);

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
                    value={productQuantity}
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
                {showMessage && <p>Added to cart</p>}
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
