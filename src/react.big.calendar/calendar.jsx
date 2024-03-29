import React from 'react';
import { Link } from 'react-router-dom';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as moment from 'moment';
import axios from 'axios';
import EventOverlay from '../event.edit/event.overlay.jsx';

import './calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

class CbsFullCalendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events:[],
			clickedEvent: {
				start: new Date(),
				end: new Date()
			},
			showEvent: false
		};
		this.openEventOverlay = this.openEventOverlay.bind(this);
		this.closeEventOverlay = this.closeEventOverlay.bind(this);
	}

	async componentDidMount() {
		try {
			let response = await axios.get(`${process.env.API_SERVER_URL}/api/events`);
			response.data.events = response.data.events.map((event) => {
				event.doc.start = moment.unix(event.doc.start).toDate();
				event.doc.end = moment.unix(event.doc.end).toDate();
				return event.doc;
			});
			this.setState({
				events: response.data.events
			});
		} catch(error) {
			console.log(error);
		}
	}

	openEventOverlay(e) {
		this.setState({
			clickedEvent: {
				_id: e._id,
				title: e.title,
				start: e.start,
				end: e.end,
				location: e.location
			},
			showEvent: true
		});
	}

	closeEventOverlay() {
		this.setState({
			showEvent: false
		});
	}

	render() {
		return (
			<div>
				<EventOverlay
					open = {this.state.showEvent}
					close = {this.closeEventOverlay}
					event = {this.state.clickedEvent}
				></EventOverlay>
				<div className='h-80vh'>
					<div>
						<Link className='btn' to="/calendar/event">Add New Event</Link>
					</div>
					<BigCalendar
						localizer = {localizer}
						events = {this.state.events}
						views = {['month', 'week', 'day']}
						popup = {true}
						onSelectEvent = {this.openEventOverlay}
					/>
				</div>
			</div>
		);
	}
}

export default CbsFullCalendar;