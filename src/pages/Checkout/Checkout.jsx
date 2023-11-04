import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <main className="container">
        <header>
          <h1>Checkout</h1>
        </header>
        <section className="section">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                id="address"
                onChange={handleChange}
                value={data.address}
              />
            </div>
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                name="creditCard"
                type="text"
                id="credit-card"
                onChange={handleChange}
                value={data.creditCard}
              />
            </div>

            <button disabled={!isFormFilled}>Finalize purchase</button>
          </form>
        </section>
      </main>
    </>
  );
}
