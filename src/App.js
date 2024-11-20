import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + step);

  const handleChange = (event) => {
    event === 0 ? (event = event) : setValue(event.target.value);
  };

  const handleReset = () => {
    setStep((step) => (step = 0));
    setValue((value) => (value = 1));
  };

  return (
    <div>
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={handleChange}
      />
      <p>{value}</p>
      <div>
        <button onClick={() => setStep((v) => v - Number(value))}>-</button>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <button onClick={() => setStep((v) => v + Number(value))}>+</button>
      </div>
      <button onClick={handleReset}>Reset</button>
      <p>
        <span>
          {step === 0
            ? "Today is "
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(step)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
