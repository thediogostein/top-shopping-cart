import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import {
  Home,
  Shop,
  All,
  About,
  ErrorPage,
  Product,
  Electronics,
  Jewelery,
  MenClothing,
  WomenClothing,
  Cart,
} from "./pages/index.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop/",
          element: <Shop />,
          children: [
            { index: true, element: <All /> },
            {
              path: "electronics",
              element: <Electronics />,
            },
            {
              path: "jewelery",
              element: <Jewelery />,
            },
            {
              path: "men",
              element: <MenClothing />,
            },
            {
              path: "women",
              element: <WomenClothing />,
            },
          ],
        },
        {
          path: "product/:productId",
          element: <Product />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
  ]);
  return <RouterProvider router={router} />;
}
