import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import WelcomeLabel from './components/WelcomeLabel';
import Registration from './components/Registration';
import MainPage from './components/MainPage';
import style from './components/styleMain.css';


const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/registration" component={Registration} />
			<Route path="/mainpage" component={MainPage} />
			<Route path="/mainpage/fight" component={MainPage} />
			<Route path="/mainpage/crews" component={MainPage} />
			<Route path="/mainpage/ships" component={MainPage} />
			<Route path="/mainpage/pirates" component={MainPage} />
			<Route path="/mainpage/user_details" component={MainPage} />
			<Route path="/mainpage/add_crew" component={MainPage} />
			<Route path="/mainpage/add_fight" component={MainPage} />
			<Route path="/mainpage/add_fleet" component={MainPage} />
			<Route path="/mainpage/add_port" component={MainPage} />
			<Route path="/mainpage/add_ship" component={MainPage} />
			<Route path="/mainpage/add_alliance" component={MainPage} />
		</Switch>
	</main>
);

const App = () => (
	<div>
		<Main />
	</div>
);

ReactDOM.render(
	(
		<BrowserRouter>
			<Switch>
				<Route path="http://www.stud.fit.vutbr.cz/~xtavel00/index.html/login/" component={Login} />
				<Route path="/registration" component={Registration} />
				<Route path="/mainpage" component={MainPage} />
			</Switch>
		</BrowserRouter>

	),
	document.getElementById('react-root'),
);
