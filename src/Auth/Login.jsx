import React from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { notifyUser } from '../helpers.js';
import styled from "styled-components";

const LoginSignupForm = styled.div`
  display: flex;
  justify-content: center;
`;

class cbsLogin extends React.Component {
  constructor(props) {
    super(props);
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
  async signUp(ev) {
    try {
      ev.preventDefault();
      const self = this;
      var res = await axios({
        method: "Post",
        url: `${process.env.API_SERVER_URL}/api/isUsernameUnique`,
        data: {
          newUser: self.state.registerationDetails
        }
      });
      if (!res.data.isUnique) {
        alert("Email Already Register");
      }
      this.showLogin();
    } catch (err) {
      console.log(err);
    }
  }
  async login(ev) {
    try {
      ev.preventDefault();
      const self = this;
      var res = await axios({
        method: "Post",
        url: `${process.env.API_SERVER_URL}/api/authenticateLogin`,
        data: {
          username: self.state.registerationDetails.email,
          password: self.state.registerationDetails.password
        }
      });
      if (!res.data.member.memberId) {
        console.log("username/password error");
      }
      this.props.history.push("/profile");
      console.log("login successfully");
    } catch (err) {
      notifyUser(err.response.data.reason);
    }
  }
  onChangeHandler(event) {
    var tempRegisterationDetails = { ...this.state.registerationDetails };
    tempRegisterationDetails[event.target.name] = event.target.value;
    this.setState({ registerationDetails: tempRegisterationDetails });
  }

  showLogin() {
    this.setState({ login: "show", register: "hide" });
  }
  showRegister() {
    this.setState({ login: "hide", register: "show" });
  }
  render() {
    var curentYear = new Date().getFullYear("yyyy");
    let yearsList = [];
    for (let i = curentYear; i >= 1998; i--) {
      yearsList.push(i);
    }

    return (
      <LoginSignupForm>
        <ToastContainer />
        <div className="form">
          <h4>CBS Alumni Network</h4>
          <div className={this.state.register + " register-form"}>
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
              <a onClick={this.showLogin.bind(this)}>Sign In</a>
            </p>
          </div>
          <div className={this.state.login + " login-form"}>
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
              required
            />
            <button onClick={this.login}>login</button>
            <p className="message">
              Not registered?{" "}
              <a onClick={this.showRegister.bind(this)}>Create an account</a>
            </p>
          </div>
        </div>
      </LoginSignupForm>
    );
  }
}
export default cbsLogin;
