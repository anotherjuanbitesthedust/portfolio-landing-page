import { useState } from 'react';

function InteractiveCounter() {
  // useState Hook - this is STATE!
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("Click buttons to change me!");

  // Functions that update state
  const increment = () => {
    setCount(count + step);
    setMessage(`Increased by ${step}! 🚀`);
  };

  const decrement = () => {
    setCount(count - step);
    setMessage(`Decreased by ${step}! 📉`);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    setMessage("Reset to zero! 🔄");
  };

  const randomJump = () => {
    const jump = Math.floor(Math.random() * 50) + 1;
    setCount(count + jump);
    setMessage(`Random jump of ${jump}! 🎲`);
  };

  return (
    <div className="interactive-counter">
      <h3>🎮 Interactive Counter with State</h3>
      
      {/* Display current state */}
      <div className="counter-display">
        <div className="big-number">{count}</div>
        <div className="step-info">Step size: {step}</div>
        <div className="message">{message}</div>
      </div>

      {/* Step size controls */}
      <div className="step-controls">
        <label>Step Size: </label>
        <input 
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          max="10"
          className="step-input"
        />
      </div>

      {/* Action buttons */}
      <div className="counter-buttons">
        <button onClick={increment} className="btn-increment">
          +{step} 📈
        </button>
        <button onClick={decrement} className="btn-decrement">
          -{step} 📉
        </button>
        <button onClick={reset} className="btn-reset">
          Reset 🔄
        </button>
        <button onClick={randomJump} className="btn-random">
          Random Jump 🎲
        </button>
      </div>

      {/* Conditional styling based on state */}
      <div className="counter-status">
        {count > 50 && <div className="high-score">🔥 High Score!</div>}
        {count < 0 && <div className="negative">⚠️ Gone Negative!</div>}
        {count === 0 && <div className="zero">🎯 Perfect Zero!</div>}
      </div>
    </div>
  );
}

export default InteractiveCounter;