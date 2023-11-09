import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useEffect, useReducer, useState } from "react";
import { ADDED, DECREASED, INCREASED, REMOVED, reducer } from "./utils/reducer";

const cartArr = [
  { id: 0, product: "shirt", quantity: 1, price: 100 },
  { id: 1, product: "shirt", quantity: 2, price: 200 },
];

function App() {
  const [cart, dispatch] = useReducer(reducer, []);
  // const [cart, setCart] = useState(cartArr);
  const [nrOfItems, setNumberOfItems] = useState(0);

  function addToCart(itemToAdd) {
    dispatch({ type: ADDED, payload: { itemToAdd } });
  }

  function removeFromCart(id) {
    dispatch({ type: REMOVED, payload: { id } });
  }

  function increaseCartItem(id) {
    dispatch({ type: INCREASED, payload: { id } });
  }

  function decreaseCartItem(id) {
    dispatch({ type: DECREASED, payload: { id } });
  }

  useEffect(() => {
    const numberOfItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setNumberOfItems(numberOfItems);
  }, [cart]);

  return (
    <>
      <Header nrOfCartItems={nrOfItems} />
      <Outlet
        context={[
          cart,
          addToCart,
          removeFromCart,
          increaseCartItem,
          decreaseCartItem,
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
