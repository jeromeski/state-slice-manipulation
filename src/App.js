import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles.css";
import BootstrapProvider from "@bootstrap-styled/provider";
import ShoppingCart from "./pages/ShoppingCart";

export default function App() {
  return (
    <div className="App">
      <BootstrapProvider bootstrapTheme={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<ShoppingCart />} /> */}
          </Routes>
        </BrowserRouter>
      </BootstrapProvider>
    </div>
  );
}
