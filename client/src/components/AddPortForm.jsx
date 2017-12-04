import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleForm.css';

class AddPortForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			capacity: '',
			location: '',
			belongsTo: '',
			succes: '',
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
		url = url + this.state.capacity + '/' + this.state.location + '/' + this.state.belongsTo + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddPort() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Prístav bol pridaný.
					<Link className="form_container" to="/mainpage/ports">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (res === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Kapacita:</div>
						<input name="capacity" type="text" value={this.state.capacity} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Lokalita:</div>
						<input name="location" type="text" value={this.state.location} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Teritórium posádky:</div>
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
			Nepodarilo sa pridať prístav.
			<Link className="form_container" to="/mainpage/ports">
				<input className="submit_b" type="submit" value="Naspäť" />
			</Link>
		</div>
		)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddPort()}
			</form>
		);
	}
}
export default AddPortForm;
