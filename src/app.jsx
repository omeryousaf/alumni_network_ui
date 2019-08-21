import '../config.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import CbsFullCalendar from './react.big.calendar/calendar.jsx';
import EventEdit from './event.edit/event.edit.jsx';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/calendar" component={CbsFullCalendar} />
				<Route path="/calendar/event" component={EventEdit} />
				<Route path="/calendar/edit/event/:_id" component={EventEdit} />
				<Redirect to="/calendar" />
			</Switch>
		</BrowserRouter>
	);
}

ReactDOM.render(
  <App />, document.getElementById('root')
);