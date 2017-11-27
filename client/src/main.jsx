import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import WelcomeLabel from './components/WelcomeLabel';
import Registration from './components/Registration';


const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/registration" component={Registration} />
		</Switch>
	</main>
);
  
  // The Header creates links that can be used to navigate
  // between routes.
const Header = () => (
	<header>
		<nav>
			<ul>
		  		<li><Link to='/'>Home</Link></li>
			  	<li><Link to='/registration'>Registrácia</Link></li>
			</ul>
		</nav>
	</header>
);



const App = () => (
	<div>
		<Header />
		<Main />
	</div>
);

ReactDOM.render(
	(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	),
	document.getElementById('react-root'),
);
