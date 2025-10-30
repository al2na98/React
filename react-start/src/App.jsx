import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
    
    //метод
    handleClick(){
      
      this.setState({count: this.state.count + 1})
    }
    
    render() {
      return (
        <div className="App">
        Hello

        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}


export default App;
