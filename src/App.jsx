import { useFetch } from "./hooks/useFetch";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  // const { data, error, loading } = useFetch("products");
  // const categories = useFetch("products/categories");

  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
