import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../navBar/index.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-xs navbar-fixed-top navbar-inverse bg-inverse">
          <div className="navbar-header">
            <a className="navbar-brand">
              <Link to="/">
                <h3>Baghians Network</h3>
              </Link>
            </a>
          </div>
          <ul className="">
            <li id="li1" className="nav.Items">
              <Link to="/directory">Directory</Link>
            </li>
            <li id="li1" className="nav.Items">
              <Link to="/calendar">Calender</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    );
  }
}
export default Navbar;
