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
			<Route exact path="/mainpage" component={MainPage} />
			<Route exact path="/mainpage/fight" component={MainPage} />
			<Route exact path="/mainpage/crews" component={MainPage} />
			<Route exact path="/mainpage/ships" component={MainPage} />
			<Route exact path="/mainpage/user_details" component={MainPage} />
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
				<Route exact path="/" component={Login} />
				<Route path="/registration" component={Registration} />
				<Route path="/mainpage" component={MainPage} />
			</Switch>
		</BrowserRouter>
	),
	document.getElementById('react-root'),
);
