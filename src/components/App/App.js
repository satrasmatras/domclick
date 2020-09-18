import React, {useState} from 'react';
import logo from '../../img/logo.svg';
import './App.css';
import NumberWidget from '../NumberWidget/NumberWidget'

export function App() {
  const [currentValue, setCurrentValue] = useState(10);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(20);

  function handleChange(newVal) {
    setCurrentValue(newVal);
  }

  function handleMinValChange(newVal) {
    if (newVal <= currentValue) {
      setMinValue(newVal);
    }
  }

  function handleMaxValChange(newVal) {
    if (newVal >= currentValue) {
      setMaxValue(newVal);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <main className="App-content">
        <div className="App-config">
          <h2>Widget Config</h2>
          <div>
            <h3>Current Value</h3>
            <NumberWidget
              currentValue={currentValue}
              minValue={minValue}
              maxValue={maxValue}
              handleChange={handleChange}
            />
          </div>
          <div>
            <h3>Min Value</h3>
            <NumberWidget
              currentValue={minValue}
              minValue={-5}
              maxValue={20}
              handleChange={handleMinValChange}
            />
          </div>
          <div>
            <h3>Max Value</h3>
            <NumberWidget
              currentValue={maxValue}
              minValue={20}
              maxValue={50}
              handleChange={handleMaxValChange}
            />
          </div>
        </div>
        <div className="App-demonstration">
          <h2>Widget</h2>
          <NumberWidget
            currentValue={currentValue}
            minValue={minValue}
            maxValue={maxValue}
            handleChange={handleChange}
          />
        </div>
      </main>
    </div>
  )
}

export default App;
