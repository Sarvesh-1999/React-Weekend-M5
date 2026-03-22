import React, { Component } from "react";

export default class LifeCycleInCbc extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("Mounting Phase");
  }

  componentDidUpdate() {
    console.log("Updating Phase");
  }

  componentWillUnmount() {
    console.log("Unmounting Phase");
  }

  render() {
    return (
      <div>
        <h1>Learn LifeCycleInCbc {this.state.count}</h1>
        <button onClick={this.increment}>
            update
        </button>
      </div>
    );
  }
}
