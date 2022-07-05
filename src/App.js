import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    animals: [],
    bodyParts: [],
    weapons: []
  });

  const addAnimals = (args) => {
    setState((prev) => ({ ...prev, animals: [...prev.animals, ...args] }));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <pre>{JSON.stringify(state.animals)}</pre>
      <button onClick={() => addAnimals(["dog", "cat", "mouse"])}>
        Add Animals
      </button>
    </div>
  );
}
