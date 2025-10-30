import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    };

    decrement = () => {
      this.setState({ count: this.state.count - 1 });
      
    };
    
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    reset = () => {
      this.setState({ count: this.state.count = 0 });

    }

    render() {
        return (
            <div className="App" style={{margin:'auto', width: '300px'}}>
                <button 
                onClick={this.decrement}>
                  -
                </button>
                <span 
                style={{margin: '0 0.5rem', display: 'inline-block'}}>
                  {this.state.count}
                </span>
                <button 
                onClick={this.increment}>+</button>
                <br />
                <button 
                onClick={this.reset}
                >reset</button>
            </div>
        );
    }
}

export default App;
