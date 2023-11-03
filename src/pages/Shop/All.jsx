import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import ProductList from "../../components/ProductList/ProductList";

export default function All() {
  const { data, error, loading } = useFetch("products");

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <ProductList>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ProductList>
    </section>
  );
}
