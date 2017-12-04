import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import style from './styleForm.css';

const options = [
	{ value: '1', label: 'nákladná' },
	{ value: '2', label: 'bojová' },
];
const defaultOption = options[0];

class AddShipForm extends React.Component {
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
		let url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/insert/LOD/ /';
		url = url + this.state.type + '/' + this.state.capacity + '/'; // + this.state.canons + '/';
		url = url + this.state.divCaptain + '/' + this.state.belongsTo + '/' + this.state.port + '/' + this.state.fleetCaptain + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddShip() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Loď bola pridaná.
					<Link className="form_container" to="/mainpage/ships">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (this.state.succes === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Typ lode (1 pre nákladnú, 2 pre bojovú):</div>
						<input name="type" type="text" value={this.state.type} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Počet diel:</div>
						<input name="canons" type="text" value={this.state.canons} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Kapacita:</div>
						<input name="capacity" type="text" value={this.state.capacity} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Divízny Kapitán:</div>
						<input name="divCaptain" type="text" value={this.state.divCaptain} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Prístav:</div>
						<input name="port" type="text" value={this.state.port} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Ktorej posádke patrí:</div>
						<input name="belongsTo" type="text" value={this.state.belongsTo} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Flotilný kapitán:</div>
						<input name="fleetCaptain" type="text" value={this.state.fleetCaptain} onChange={this.handleChange} />
					</label>
					<div className="form_container">
						<input className="submit_b" type="submit" value="Potvrdiť" />
					</div>
				</div>
			);
		}
		return (
			<div>
				Nepodarilo sa pridať loď.
				<Link className="form_container" to="/mainpage/ships">
					<input className="submit_b" type="submit" value="Naspäť" />
				</Link>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddShip()}
			</form>
		);
	}
}
export default AddShipForm;
