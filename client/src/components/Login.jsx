import React from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';
import WelcomeLabel from './WelcomeLabel';
import style from './styleLogin.css';


const picStyle = {
	backgroundImage: 'url(./images/welcome.png)',
	display: 'block',
	width: 'auto',
	height: '200px',
	backgroundSize: 'cover',
	boxShadow: 'inset 0px 6px 44px -6px rgba(0,0,0,0.75)',
};


class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			isRegister: false,
			seconds: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const isRegister = !this.state.isRegister;
		this.setState({ isRegister, seconds: 4 });
		const interval = setInterval(() => {
			this.setState({ seconds: this.state.seconds - 1 });
			if (this.state.seconds === 0) {
				clearInterval(interval);
				this.setState({ isRegister: false });
			}
		}, 1000);
	}

	renderContent() {
		if (this.state.isRegister) {
			return (
				<div>
					<div className="countdown">Ospravedlňujeme sa, momentálne nie je možné sa registrovať</div>
					<div className="countdown c_text">{this.state.seconds}</div>
				</div>
			);
		}
		return (
			<div>
				<input className="inputs first_input" type="text" placeholder="Prihlasovacie meno" name="uname" />
				<input className="inputs" type="text" placeholder="Vaše heslo" name="psw" />
				<Link to="/mainpage">
					<button className="w3-teal log_in">Prihlásiť </button>
				</Link>
				<div id="regdiv">
					<button id="reg" className="w3-pink log_in" onClick={this.handleClick}>Registrovať</button>
					<p id="reg_text">Nemáte účet a chcete sa zaregistrovať? Kliknite na Registrovať</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<WelcomeLabel />
				<div id="home_box">
					<div id="welcome_pic" style={picStyle} />
					{this.renderContent()}
				</div>
			</div>
		);
	}
}

export default Login;
