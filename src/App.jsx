import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [largest, setLargest] = useState("");

  const findLargest = () => {
    const numbers = [
      Number(num1),
      Number(num2),
      Number(num3),
      Number(num4),
      Number(num5),
    ];

    const max = Math.max(...numbers);
    setLargest(max);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Largest Number Finder</h1>

      <input
        type="number"
        placeholder="Enter Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Number 3"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Number 4"
        value={num4}
        onChange={(e) => setNum4(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter Number 5"
        value={num5}
        onChange={(e) => setNum5(e.target.value)}
      />
      <br /><br />

      <button onClick={findLargest}>Find Largest Number</button>

      {largest !== "" && (
        <h2>Largest Number = {largest}</h2>
      )}
    </div>
  );
}

export default App;