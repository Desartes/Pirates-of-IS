import React from 'react';
import style from './styleForm.css';

class AddCrewForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			flag: '',
			captain: '',
			alliance: '',
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
		alert('A name was submitted: ' + this.state.name);
		this.tryFetching();
		event.preventDefault();
	}

	tryFetching() {
		let url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/insert/POSADKA/ /';
		url = url + this.state.name + '/' + this.state.flag + '/' + this.state.captain + '/ ' + this.state.alliance + '/';
		console.log(url);
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				console.log('insertol som');
				this.setState({ succes: res });
			})
			.catch(error => console.error(error));
	}
	renderAddCrew() {
		const res = this.state.succes.trim();
		if (res === '0') {
			return(
				<div>
					Posádka bola vytvorená.
					<Link className="form_container" to="/mainpage/crews">
						<input className="submit_b" type="submit" value="Naspäť" />
					</Link>
				</div>
			);
		}
		if (res === 'SEARCH') {
			return(
				<div className="form_container">
					<label>
						<div className="labely">Meno:</div>
						<input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Vlajka:</div>
						<input name="flag" type="text" value={this.state.flag} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Kapitán:</div>
						<input name="captain" type="text" value={this.state.captain} onChange={this.handleChange} />
					</label>
					<label>
						<div className="labely">Súčasťou aliancie:</div>
						<input name="alliance" type="text" value={this.state.alliance} onChange={this.handleChange} />
					</label>
				</div>
			);
		}
		return (
			<div>
				Nepodarilo sa vytvoriť posádku.
				<Link className="form_container" to="/mainpage/crews">
					<input className="submit_b" type="submit" value="Naspäť" />
				</Link>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderAddCrew()}
				<div className="form_container">
					<input className="submit_b" type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}
export default AddCrewForm;
