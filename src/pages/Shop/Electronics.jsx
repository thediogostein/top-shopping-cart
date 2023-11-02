import Card from "../../components/Card/Card";
import ProductList from "../../components/ProductList/ProductList";
import { useFetch } from "../../hooks/useFetch";

export default function Electronics() {
  const { data, error, loading } = useFetch("products/category/electronics");

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
