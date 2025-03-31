import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
