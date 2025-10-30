import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }
    
    
    render() {
      return (
        <div className="App">
        Hello
 {/* использование стрелочной ф-и внутри (для небольших изменений) */}
        <button onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</button>
      </div>
    );
  }
}


export default App;
