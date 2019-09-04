import "../config.js";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import CbsFullCalendar from "./react.big.calendar/calendar.jsx";
import EventEdit from "./event.edit/event.edit.jsx";
import cbsLogin from "./Auth/Login.jsx";
import Navbar from "./navBar/navBar.jsx";
import directory from "./directory/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={cbsLogin} />
        <Route path="/calendar" component={CbsFullCalendar} />
        <Route path="/directory" component={directory} />
        <Route path="/Home" exact component={Navbar} />
        <Route path="/calendar/event" component={EventEdit} />
        <Route path="/calendar/edit/event/:_id" component={EventEdit} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
