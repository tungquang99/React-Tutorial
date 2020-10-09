import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      country: "",
      message: "",
      check: false,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fname:" + this.state.firstname + " " + this.state.lastname);
    console.log("Country:" + this.state.country);
    console.log("Message:" + this.state.message);
    if ( this.state.check === true) {
        console.log(" Are you a web developer: Yes");
    }else {
        console.log(" Are you a web developer: No");
    }
  };

  render() {
    return (
      <div>
        <div>
          <h3>Using CSS to style an HTML Form</h3>
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                onChange={(e) => this.handleChange(e)}
              />
              <label>Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                onChange={(e) => this.handleChange(e)}
              />
              <label>Country</label>
              <select
                id="country"
                name="country"
                onChange={(e) => this.handleChange(e)}
              >
                <option value="australia">Australia</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="usa">USA</option>
              </select>
              <label>Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Your message.."
                onChange={(e) => this.handleChange(e)}
              />
              <label>
                 Are you a web developer?
                <input
                  name="check"
                  type="checkbox"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
