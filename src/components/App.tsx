import React from "react";
import "./App.css";
import Result from "./Result/Result";
import Clear from "./Operations/Clear";
import Number from "./Number/Number";
import Divide from "./Operations/Divide";
import Subtract from "./Operations/Subtract";
import Add from "./Operations/Add";
import Equal from "./Operations/Equal";
import Multiply from "./Operations/Multiply";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      num0: '',
      num1: '',
      method: "null"
    };
  }

  setNumbers = (i, e) => {
    if (this.state.method === "null") {
      this.setState({
        num0: this.state.numbers[i],
        num0: ('' + this.state.num0 + this.state.numbers[e]) * 1,
        result: this.state.numbers[i],
        result: ('' + this.state.num0 + this.state.numbers[e]) * 1,
      });
    }
    
    if (this.state.method !== "null") {
      this.setState({
        num1: this.state.numbers[i],
        num1: ('' + this.state.num1 + this.state.numbers[e]) * 1,
        result: this.state.numbers[i],
        result: ('' + this.state.num1 + this.state.numbers[e]) * 1,
      });
    }
  };

  clear = () => {
    this.setState({ num0: 0, num1: 0, result: 0, method: "null" });
  };

  add = (x, y) => {
    this.setState({ method: "add" });
    return x + y;
  };

  subtract = (x, y) => {
    this.setState({ method: "subtract" });
    return x - y;
  };

  multiply = (x, y) => {
    this.setState({ method: "multiply" });
    return x * y;
  };

  divide = (x, y) => {
    this.setState({ method: "divide" });
    return x / y;
  };

  result = () => {
    switch (this.state.method) {
      case "add":
        return this.setState({
          result: this.add(this.state.num0, this.state.num1)
        });
      case "subtract":
        return this.setState({
          result: this.subtract(this.state.num0, this.state.num1)
        });
      case "divide":
        return this.setState({
          result: this.divide(this.state.num0, this.state.num1)
        });
      case "multiply":
        return this.setState({
          result: this.multiply(this.state.num0, this.state.num1)
        });
      default:
        return this.state.result;
    }
  };

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Result result={this.state.result} />
        </React.Fragment>
        <div className="Body">
          <div className="left-side">
            <Clear onClick={this.clear} />
            <div className="row">
              <Number
                onClick={() => this.setNumbers(this.state.numbers[7], this.state.numbers[7])}
                onKeyPress={this.handleKeyPress} 
                number={this.state.numbers[7]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[8], this.state.numbers[8])}
                onKeyPress={this.handleKeyPress}
                number={this.state.numbers[8]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[9], this.state.numbers[9])}
                onKeyPress={this.handleKeyPress}
                number={this.state.numbers[9]}
              />
            </div>
            <div className="row">
              <Number
                onClick={() => this.setNumbers(this.state.numbers[4], this.state.numbers[4])}
                number={this.state.numbers[4]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[5], this.state.numbers[5])}
                number={this.state.numbers[5]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[6], this.state.numbers[6])}
                number={this.state.numbers[6]}
              />
            </div>
            <div className="row">
              <Number
                onClick={() => this.setNumbers(this.state.numbers[1], this.state.numbers[1])}
                number={this.state.numbers[1]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[2], this.state.numbers[2])}
                number={this.state.numbers[2]}
              />
              <Number
                onClick={() => this.setNumbers(this.state.numbers[3], this.state.numbers[3])}
                number={this.state.numbers[3]}
              />
            </div>
            <div className="row last-num">
              <Number
                onClick={() => this.setNumbers(this.state.numbers[0], this.state.numbers[0])}
                number={this.state.numbers[0]}
              />
            </div>
          </div>
          <div className="right-side text-center">
            <div className="row">
              <Divide
                onClick={() => this.divide(parseInt(this.state.num0), parseInt(this.state.num1))}
                sign={"÷"}
              />
              <Subtract
                onClick={() => this.subtract(this.state.num0, this.state.num1)}
                sign={"-"}
              />
              <Multiply
                onClick={() => this.multiply(this.state.num0, this.state.num1)}
                sign={"*"}
              />
              <Add
                onClick={() => this.add(parseInt(this.state.num0), parseInt(this.state.num1))}
                sign={"+"}
              />
              <Equal onClick={() => this.result()} sign={"="} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;