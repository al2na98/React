import React, {Component} from "react";

class App extends Component {
    state = {
      count: 0
    };
    
    handleClick = () => {
      // this.state.count++; //не работает так (состояние не обновится)
      this.setState({count: this.state.count + 1})
      //при одном нажатиии count = 3
      // this.setState((prevState) => ({count: prevState.count + 1}))
      // this.setState((prevState) => ({count: prevState.count + 1}))
      // this.setState((prevState) => ({count: prevState.count + 1}))
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
