import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { sayHi } from "./utils/sayHi.js";

const cartArr = [
  // { id: 0, product: "shirt", quantity: 1, price: 100 },
  // { id: 1, product: "shirt", quantity: 2, price: 200 },
];

function App() {
  const [cart, setCart] = useState(cartArr);
  const [nrOfItems, setNumberOfItems] = useState(0);

  function addToCart(itemToAdd) {
    const existingItem = cart.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + itemToAdd.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, itemToAdd]);
    }
  }

  function removeFromCart(id) {
    console.log("removed", id);
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  }

  function increaseCartItem(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
  }

  function decreaseCartItem(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCart(updatedCart);
  }

  useEffect(() => {
    const numberOfItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setNumberOfItems(numberOfItems);
  }, [cart]);

  useEffect(() => {
    sayHi();
  }, []);

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
