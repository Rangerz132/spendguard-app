import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { store } from "./store/store.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { router } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
