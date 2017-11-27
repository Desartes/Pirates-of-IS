import React from 'react';
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
	render() {
		return (
			<div>
				<WelcomeLabel />
				<div id="home_box">
					<div id="welcome_pic" style={picStyle} />
					<input className="inputs" type="text" placeholder="Prihlasovacie meno" name="uname" />
					<input className="inputs" type="text" placeholder="Vaše heslo" name="psw" />
					<button id="sign_in">Prihlásiť </button>
				</div>
			</div>
		);
	}
}

export default Login;
