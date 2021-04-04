import React, { Component } from "react";
const shortid = require("shortid");

export default class Form extends Component {
  state = {
    showform: false
  }
  toggleChange = () => {
    this.setState({
      showform: !this.state.showform
    });
  };
  render() {
    if (this.state.showform === false) {
      return (
        <React.Fragment>
          <form onClick={this.toggleChange}>
            <button type="button" className="btn btn-success">
              Add Meal
            </button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="form-group">
            <label>Meal:</label>
            <input
              name="text"
              value={this.props.defaults.text}
              onChange={this.props.handleChange}
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group">
            <label>Calories:</label>
            <input
              name="calorie"
              value={this.props.defaults.calorie}
              onChange={this.props.handleChange}
              type="number"
              className="form-control"
              id="pwd"
            />
          </div>
          <button onClick={this.props.addMeal} className="btn btn-info mr-2">
            Save
            </button>
          <button onClick={this.toggleChange} className="btn btn-danger">
            Cancel
            </button>
        </React.Fragment>
      );
    }
  }
}
