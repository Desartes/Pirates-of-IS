import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

ReactDOM.render(
	(
		<BrowserRouter>
			<Route path="/" component={Dashboard} />
		</BrowserRouter>
	),
	document.getElementById('react-root'),
);
