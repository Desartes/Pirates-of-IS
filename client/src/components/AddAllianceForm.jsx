import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleForm.css';

class AddAllianceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
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
		let url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/insert/ALIANCIA/ /';
		url = url + this.state.name + '/' + this.state.port + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddAlliance() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Aliancia bola vytvorená.
					<Link className="form_container" to="/mainpage/alliances">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (this.state.succes === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Názov:</div>
						<input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Prístav:</div>
						<input name="port" type="text" value={this.state.port} onChange={this.handleChange} />
					</label>
					<div className="form_container">
						<input className="submit_b" type="submit" value="Potvrdiť" />
					</div>
				</div>
			);
		}
		return (
			<div>
				Nepodarilo sa vytvoriť alianciu.
				<Link className="form_container" to="/mainpage/alliances">
					<input className="submit_b" type="submit" value="Naspäť" />
				</Link>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddAlliance()}
			</form>
		);
	}
}
export default AddAllianceForm;
