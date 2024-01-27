import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/ItemPage";
import { Cart } from "./pages/Cart/Cart";
import { Catalog } from "./pages/Catalog/Catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
