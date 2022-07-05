import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CartProvider from "./providers/cart.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
