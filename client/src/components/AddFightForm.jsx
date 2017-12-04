import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleForm.css';

class AddFightForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deaths: '',
			port: '',
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
		let url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/insert/BITKA/ /';
		url = url + this.state.deaths + '/' + this.state.port + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddFight() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Bitka bola pridaná.
					<Link className="form_container" to="/mainpage/fights">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (res === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Počet strát:</div>
						<input name="deaths" type="text" value={this.state.deaths} onChange={this.handleChange} />
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
				Nepodarilo sa pridať bitku.
				<Link className="form_container" to="/mainpage/fights">
					<input className="submit_b" type="submit" value="Naspäť" />
				</Link>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddFight()}
			</form>
		);
	}
}
export default AddFightForm;
