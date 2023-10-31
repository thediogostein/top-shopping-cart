import { useFetch } from "./hooks/useFetch";
//
import "./App.css";

function App() {
  const { data, error, loading } = useFetch("products");
  const categories = useFetch("products/categories");

  console.log(categories);

  return (
    <>
      <h1>My store</h1>
    </>
  );
}

export default App;
