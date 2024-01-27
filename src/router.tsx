import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/ItemPage";
import { Cart } from "./pages/Cart/Cart";
import { Catalog } from "./pages/Catalog/Catalog";
import { Saved } from "./pages/Saved/Saved";
import { App } from "./App";

export const appRouter = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
