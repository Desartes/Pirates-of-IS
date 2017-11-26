import React from 'react';
import { Router, render } from 'react-router';
import { Dashboard } from './components/Dashboard';

document.addEventListener('DOMContentLoaded', () => {
	const Main = () => (
		<Router>
			<Dashboard path="/" />
		</Router>
	);

	render(<Main />, document.getElementById('viewport'));
});

