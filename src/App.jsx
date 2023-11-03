import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const cartArr = [
  { id: 0, product: "shirt", quantity: 1, price: 100 },
  { id: 2, product: "shirt", quantity: 4, price: 200 },
];
function App() {
  const [cart, setCart] = useState(cartArr);

  return (
    <>
      <Header />
      <Outlet context={[cart, setCart]} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
