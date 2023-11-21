import { useState } from "react";
import "./style.scss";

export default function Dice() {
  const [count, setCount] = useState(1);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setCount(randomNum);
  };

  return (
    <div className="dice">
      <p>Current number: {count}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}
