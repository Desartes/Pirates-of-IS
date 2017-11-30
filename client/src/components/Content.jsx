import React from 'react';
import Fights from './Fights';
import Crews from './Crews';
import Ships from './Ships';
import Form from './Form';

class Content extends React.Component {
	renderContent() {
		if (this.props.props === '/mainpage/fights') {
			return (<Fights />);
		}
		if (this.props.props === '/mainpage/crews') {
			return (<Crews />);
		}
		if (this.props.props === '/mainpage/ships') {
			return (<Ships />);
		}
		if (this.props.props === '/mainpage/user_details') {
			return (<Form />);
		}
		// TODO
	}

	render() {
		console.log(this.props.props);
		return (
			<div>{this.renderContent()}</div>
		);
	}
}
export default Content;
