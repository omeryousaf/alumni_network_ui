import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const axios = require("axios");

class StartCbs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      login: "show",
      register: "hide",
      boardingHouseNames: ["A.J", "Saigol", "Sanobar", "Mehran", "Abaseen"],
      registerationDetails: {
        name: "",
        email: "",
        password: "",
        yearOfJoining: "",
        boardingHouse: "",
        phone: "",
        username: ""
      }
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }
  async signUp() {
    try {
      const self = this;
      var res = await axios({
        method: "Post",
        url: "http://localhost:3001/isUsernameUnique",
        data: {
          newUser: self.state.registerationDetails
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async login() {
    try {
      const self = this;
      var res = await axios({
        method: "Post",
        url: "http://localhost:3001/authenticateLogin",
        data: {
          newUser: self.state.registerationDetails
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  onChangeHandler(event) {
    var tempRegisterationDetails = { ...this.state.registerationDetails };
    tempRegisterationDetails[event.target.name] = event.target.value;
    this.setState({ registerationDetails: tempRegisterationDetails });
    console.log(event.target.value);
  }

  showLogin = () => {
    this.setState({ login: "show", register: "hide" });
    console.log(this.state.registerationDetails);
  };
  showRegister = () => {
    this.setState({ login: "hide", register: "show" });
  };
  render() {
    var curentYear = new Date().getFullYear("yyyy");
    let yearsList = [];
    for (let i = curentYear; i >= 1998; i--) {
      yearsList.push(i);
    }

    return (
      <div className="login-page">
        <div className="form">
          <h4>CBS Alumni Network</h4>
          <form className={this.state.register + " register-form"}>
            <input
              type="text"
              name="name"
              onChange={this.onChangeHandler}
              placeholder="Full Name"
            />
            <input
              type="text"
              name="email"
              onChange={this.onChangeHandler}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              onChange={this.onChangeHandler}
              placeholder="Password"
            />
            <input
              type="text"
              name="phone"
              onChange={this.onChangeHandler}
              placeholder="Phone"
              required
            />
            <select onChange={this.onChangeHandler} name="boardingHouse">
              <option value="">select your boarding house</option>
              {this.state.boardingHouseNames.map(boardingHouse => (
                <option key={boardingHouse}>{boardingHouse}</option>
              ))}
            </select>
            <select onChange={this.onChangeHandler} name="yearOfJoining">
              <option>select year</option>
              {yearsList.map(year => (
                <option key={year}>{year}</option>
              ))}
            </select>
            <button onClick={this.signUp}>create</button>
            <p className="message">
              Already registered?{" "}
              <a href="#" onClick={this.showLogin}>
                Sign In
              </a>
            </p>
          </form>
          <form className={this.state.login + " login-form"}>
            <input
              type="text"
              name="email"
              onChange={this.onChangeHandler}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="email"
              onChange={this.onChangeHandler}
              placeholder="Password"
              required
            />
            <button onClick={this.login}>login</button>
            <p className="message">
              Not registered?{" "}
              <a href="#" onClick={this.showRegister}>
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default StartCbs;
