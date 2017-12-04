import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleForm.css';

class AddFleetForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			canons: '',
			capacity: '',
			divCaptain: '',
			fleetCaptain: '',
			belongsTo: '',
			port: '',
			succes: 'SEARCH',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	handleSubmit(event) {
		this.tryFetching();
		event.preventDefault();
	}

	tryFetching() {
		let url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/insert/FLOTILA/ /';
		url = url + this.state.fleetCaptain + '/' + this.state.belongsTo + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddFleet() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Flotila bola vytvorená.
					<Link className="form_container" to="/mainpage/fleets">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (res === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Flotilný kapitán:</div>
						<input name="fleetCaptain" type="text" value={this.state.fleetCaptain} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Flotilu vlastní posádka:</div>
						<input name="belongsTo" type="text" value={this.state.belongsTo} onChange={this.handleChange} />
					</label>
					<div className="form_container">
						<input className="submit_b" type="submit" value="Potvrdiť" />
					</div>
				</div>
			);
		}
		return (
			<div>
				Nepodarilo sa vytvoriť flotilu.
				<Link className="form_container" to="/mainpage/fleets">
					<input className="submit_b" type="submit" value="Naspäť" />
				</Link>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddFleet()}
			</form>
		);
	}
}
export default AddFleetForm;
