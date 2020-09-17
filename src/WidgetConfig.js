import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-content">
        <div className="App-config">
          <WidgetConfig/>
        </div>
        <div className="App-demonstration">

        </div>
      </main>
    </div>
  );
}

export default App;
