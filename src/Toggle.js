import React, { Component } from "react";

export class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && <h1>toggle me</h1>}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}

export default Toggle;
