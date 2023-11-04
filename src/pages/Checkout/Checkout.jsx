import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const [data, setData] = useState({
    name: "",
    address: "",
    creditCard: "",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you, ${data.name}`);
    navigate("/");
  }

  useEffect(() => {
    if (data.name.length && data.address.length && data.creditCard.length) {
      setIsFormFilled(true);
    }
  }, [data]);

  return (
    <>
      <main>
        <header className={styles.header}>
          <div className="container">
            <h1>Checkout</h1>
          </div>
        </header>
        <section className="section">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  type="text"
                  id="address"
                  onChange={handleChange}
                  value={data.address}
                  placeholder="Your address"
                />
              </div>
              <div className={styles.formRow}>
                <label htmlFor="credit-card">Credit Card</label>
                <input
                  name="creditCard"
                  type="text"
                  id="credit-card"
                  onChange={handleChange}
                  value={data.creditCard}
                  placeholder="Your credit card"
                />
              </div>

              <button disabled={!isFormFilled}>Finalize purchase</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
