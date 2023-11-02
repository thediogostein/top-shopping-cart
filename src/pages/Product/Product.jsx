import { Link } from "react-router-dom";

export default function Product() {
  return (
    <main className="container">
      <section className="section">
        <Link to="/shop">Back to products</Link>
        <h1>Product page</h1>
        <p>Image</p>
        <p>Description</p>
      </section>
    </main>
  );
}
