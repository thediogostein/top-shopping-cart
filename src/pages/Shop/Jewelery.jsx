import Card from "../../components/Card/Card";
import ProductList from "../../components/ProductList/ProductList";
import { useFetch } from "../../hooks/useFetch";

export default function Jewelery() {
  const { data, error, loading } = useFetch("products/category/jewelery");

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
