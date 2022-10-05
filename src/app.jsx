import "../config.js";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import CbsFullCalendar from "./react.big.calendar/calendar.jsx";
import EventEdit from "./event.edit/event.edit.jsx";
import cbsLogin from "./auth/login.jsx";
import Navbar from "./navBar/navBar.jsx";
import directory from "./directory/index.jsx";
import profile from "./profile/index.jsx";

function RoutesWithNav() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/calendar/event" component={EventEdit} />
        <Route path="/calendar/edit/event/:_id" component={EventEdit} />
        <Route path="/calendar" component={CbsFullCalendar} />
        <Route path="/directory" component={directory} />
        <Route path="/profile" component={profile} />
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={cbsLogin} />
        <Route path="/" component={RoutesWithNav} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
