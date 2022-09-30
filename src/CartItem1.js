import React from "react";

export default class CartItem1 extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
  }
  add = () => {
    console.log(this.state);
    this.setState({
      completed: (this.state.completed = false)
    });
  };
  render() {
    console.log(this.state.itsRaining);
    const { id, text, completed } = this.state;
    return (
      <div className="container">
        <div className="h11">
          <h1>TODO LIST</h1>
        </div>
        {completed ? (
          <input type="checkbox" onClick={this.add} checked />
        ) : (
          <input type="checkbox" />
        )}
        <p> {text}</p>
      </div>
    );
  }
}
