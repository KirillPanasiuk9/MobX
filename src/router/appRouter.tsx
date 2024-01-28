import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Catalog } from "../pages/Catalog/Catalog";
import { Saved } from "../pages/Saved/Saved";
import { App } from "../App";
import { PATHS } from "./paths";

export const appRouter = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.CATALOG,
        element: <Catalog />,
      },
      {
        path: PATHS.SAVED,
        element: <Saved />,
      },
      {
        path: PATHS.CART,
        element: <Cart />,
      },
    ],
  },
]);
