import { useCart } from "./providers/cart.context";
import "./styles.css";

export default function App() {
  const { state, incQty, decQty } = useCart();
  return (
    <div className="App">
      <button onClick={() => incQty({ id: 123 })}>Increase Quantity</button>
      <pre>{JSON.stringify(state.items[0], null, 2)}</pre>
      <button onClick={() => decQty({ id: 123 })}>Decrease Quantity</button>
    </div>
  );
}
