import React, { useState } from "react";

let num1 = 1;

export default class Calculator extends React.Component {
  // let num1=20;

  constructor() {
    super();
    this.state = {
      num: num1
    };
  }

  add = () => {
    console.log(this.state.num);
    this.setState({
      num: (this.state.num += 2)
    });
  };
  mul = () => {
    console.log(this.state.num);
    this.setState({
      num: (this.state.num *= 2)
    });
  };
  div = () => {
    console.log(this.state.num);
    this.setState({
      num: (this.state.num /= 2)
    });
  };
  pow = () => {
    console.log(this.state.num);
    this.setState({
      num: (this.state.num **= 2)
    });
  };

  render() {
    console.log(this.state.id);
    const { num } = this.state;
    return (
      <div>
        <h1>I am calculator</h1>
        <input id="num" name="num" type="text" value={num} />
        <p>{num}</p>
        <div>
          <button onClick={this.add}>Add</button>
          <button onClick={this.mul}>mul</button>
          <button onClick={this.div}>div</button>
          <button onClick={this.pow}>pow</button>
        </div>
      </div>
    );
  }
}
