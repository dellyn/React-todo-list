import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  // const { onAdd } = this.props;

  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="df item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="ЕБШ24/7"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />

        <button className="btn btn-add">Add Item</button>
      </form>
    );
  }
}
