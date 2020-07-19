import React, { Component } from "react";
import "./ThrottledInput.scss";
export default class ThrottledInput extends Component {
  state = {
    value: this.props.value,
  };

  timer = null;

  handleChange = (event) => {
    clearTimeout(this.timer);
    this.setState({
      value: event.target.value,
    });
    this.timer = setTimeout(this.triggerChange, 500);
  };

  triggerChange = () => {
    const { value } = this.state;
    this.props.onChange(value);
  };

  render() {
    return (
      <input
        className="input-group"
        placeholder="Start typing a Pokemon's name to search"
        onChange={this.handleChange}
        value={this.state.value}
        id={this.props.id}
        type="text"
      ></input>
    );
  }
}
