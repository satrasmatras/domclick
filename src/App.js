import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberWidget from './NumberWidget'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentValue: 10,
          minValue: 0,
          maxValue: 20
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMinValChange = this.handleMinValChange.bind(this);
        this.handleMaxValChange = this.handleMaxValChange.bind(this);
    }

    handleChange(newVal) {
      this.setState({currentValue: newVal});
    }
    handleMinValChange(newVal) {
      this.setState({minValue: newVal});
    }
    handleMaxValChange(newVal) {
      this.setState({maxValue: newVal});
    }

    render() {
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
                          currentValue={this.state.currentValue}
                          minValue={this.state.minValue}
                          maxValue={this.state.maxValue}
                          handleChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <h3>Min Value</h3>
                        <NumberWidget
                          currentValue={this.state.minValue}
                          minValue={-5}
                          maxValue={20}
                          handleChange={this.handleMinValChange}
                        />
                      </div>
                      <div>
                        <h3>Max Value</h3>
                        <NumberWidget
                          currentValue={this.state.maxValue}
                          minValue={20}
                          maxValue={50}
                          handleChange={this.handleMaxValChange}
                        />
                      </div>
                    </div>
                    <div className="App-demonstration">
                        <h2>Widget</h2>
                        <NumberWidget
                            currentValue={this.state.currentValue}
                            minValue={this.state.minValue}
                            maxValue={this.state.maxValue}
                            handleChange={this.handleChange}
                        />
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
