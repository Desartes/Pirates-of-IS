import React from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';
import WelcomeLabel from './WelcomeLabel';
import style from './style.css';


const picStyle = {
	backgroundImage: 'url(./images/welcome.png)',
	display: 'block',
	width: 'auto',
	height: '200px',
	backgroundSize: 'cover',
	boxShadow: 'inset 0px 6px 44px -6px rgba(0,0,0,0.75)',
};


class Login extends React.Component {
	handleClick() {
		alert('Ospravedlňujeme sa, registrácia momentálne nie je možná');
	}


	showAlert() {
		this.msg.show('Some text or component', {
			time: 2000,
			type: 'success',
		});
	}

	render() {
		return (
			<div>
				<WelcomeLabel />
				<div id="home_box">
					<div id="welcome_pic" style={picStyle} />
					<input className="inputs" type="text" placeholder="Prihlasovacie meno" name="uname" />
					<input className="inputs" type="text" placeholder="Vaše heslo" name="psw" />
					<Link to="/mainpage">
						<button id="log_in">Prihlásiť </button>
					</Link>
					<div id="regdiv">
						<p>Nemáte účet a chcete sa zaregistrovať? Kliknite na</p>
						<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
						<button id="reg" onClick={this.handleClick}>Registrovať</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
