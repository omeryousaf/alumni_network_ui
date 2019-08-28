import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import directory from "../directory/index.jsx";
import CbsFullCalendar from "../react.big.calendar/calendar.jsx";
import "../navBar/index.css";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-toggleable-xs navbar-fixed-top navbar-inverse bg-inverse">
            <div className="navbar-header">
              <a className="navbar-brand">
                <h3>Baghians Network</h3>
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
          <hr />
          <Route path="/directory" component={directory} />
          <Route path="/calendar" component={CbsFullCalendar} />
        </div>
      </Router>
    );
  }
}
export default Navbar;
