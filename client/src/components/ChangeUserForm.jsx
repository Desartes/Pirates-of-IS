import React from 'react';
import style from './styleForm.css';

class ChangeUserForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			nick: '',
			position: '',
			age: '',
			beard: '',
			characteristics: '',
			time: '',
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
		event.preventDefault();
	}
	whatToRender() {
		if(this.props.whatForm === 'user_details')
			return this.renderChangeUserDetails();
		if(this.props.whatForm === 'add_crew')
			return this.renderAddCrew();
	}
	renderAddCrew() {
		return(
			<div className="form_container">
				<label>
					<div className="labely">Meno:</div>
					<input name="name" type="text" value={this.state.pirate.name} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Prezívka:</div>
					<input name="nick" type="text" value={this.state.pirate.nick} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Pozícia:</div>
					<input name="position" type="text" value={this.state.pirate.position} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Vek:</div>
					<input name="age" type="text" value={this.state.age} onChange={this.handleChange} />
				</label>
		</div>
		);
	}
	renderChangeUserDetails() {
		return (
			<div className="form_container">
				<label>
					<div className="labely">Meno:</div>
					<input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Prezívka:</div>
					<input name="nick" type="text" value={this.state.nick} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Pozícia:</div>
					<input name="position" type="text" value={this.state.position} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Vek:</div>
					<input name="age" type="text" value={this.state.age} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Farba fúzov:</div>
					<input name="beard" type="text" value={this.state.beard} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Charakteristiky:</div>
					<input name="characteristics" type="text" value={this.state.characteristics} onChange={this.handleChange} />
				</label>
				<label>
					<div className="labely">Čas strávený v posádke:</div>
					<input name="time" type="text" value={this.state.time} onChange={this.handleChange} />
				</label>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderChangeUserDetails()}
				<div className="form_container">
					<input className="submit_b" type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}
export default ChangeUserForm;
