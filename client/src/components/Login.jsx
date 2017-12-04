import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContainer from 'react-alert';
import WelcomeLabel from './WelcomeLabel';
import style from './styleLogin.css';
import localStorageComp from './localStorageComp';


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
			userName: '',
			password: '',
			redirect: false,
			user: {},
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
	handleChange(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}
	handleLogin(event) {
		event.preventDefault();
		let finalName = this.state.userName;
		let finalPass = this.state.password;
		if (finalName.length === 0) {
			finalName = ' ';
		}
		if (finalPass.length === 0) {
			finalPass = ' ';
		}
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/login/' + finalName + '/' + finalPass + '/';
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				if (res === false) {
					console.log('funguje to'); // TODO nespravne udaje
				} else {
					console.log(res);
					console.log(this.state.user.HASH);
					console.log('idem redirectovat');
					localStorageComp.addUser(res);
					this.setState({ user: res, redirect: true });
				}
			})
			.catch(error => console.error(error));
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
				<form onSubmit={this.handleLogin}>
					<input className="inputs first_input" type="text" placeholder="Prihlasovacie meno" name="userName" value={this.state.userName} onChange={this.handleChange} required />
					<input className="inputs" type="text" placeholder="Vaše heslo" name="password" value={this.state.password} onChange={this.handleChange} required />
					<input className="w3-teal log_in" type="submit" value="Prihlásiť" />
				</form>
				<div id="regdiv">
					<button id="reg" className="w3-pink log_in">Registrovať</button>
					<p id="reg_text">Nemáte účet a chcete sa zaregistrovať? Kliknite na Registrovať</p>
				</div>
			</div>
		);
	}

	render() {
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to="/mainpage" />;
		}
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
