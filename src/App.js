import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  plusClick = () => this.setState(({ count }) => ({ count: count + 1 }));

  minusClick = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.plusClick}>+</button>
        <button onClick={this.minusClick}>-</button>
      </React.Fragment>
    );
  }
}

export default App;
