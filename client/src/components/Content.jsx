import React from 'react';
import Fights from './Fights';
import Crews from './Crews';
import Ships from './Ships';
import Fleets from './Fleets';
import Alliances from './Alliances';
import Ports from './Ports';
import ChangeUserForm from './ChangeUserForm';
import AddCrewForm from './AddCrewForm';
import AddFightForm from './AddFightForm';
import AddAllianceForm from './AddAllianceForm';
import AddShipForm from './AddShipForm';
import AddPortForm from './AddPortForm';
import AddFleetForm from './AddFleetForm';
import Pirates from './Pirates';
import Home from './Home';

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
		if (this.props.props === '/mainpage/fleets') {
			return (<Fleets />);
		}
		if (this.props.props === '/mainpage/alliances') {
			return (<Alliances />);
		}
		if (this.props.props === '/mainpage/ports') {
			return (<Ports />);
		}
		if (this.props.props === '/mainpage/user_details') {
			return (<ChangeUserForm />);
		}
		if (this.props.props === '/mainpage/add_crew') {
			return (<AddCrewForm />);
		}
		if (this.props.props === '/mainpage/add_fight') {
			return (<AddFightForm />);
		}
		if (this.props.props === '/mainpage/add_alliance') {
			return (<AddAllianceForm />);
		}
		if (this.props.props === '/mainpage/add_ship') {
			return (<AddShipForm />);
		}
		if (this.props.props === '/mainpage/add_port') {
			return (<AddPortForm />);
		}
		if (this.props.props === '/mainpage/add_fleet') {
			return (<AddFleetForm />);
		}
		if (this.props.props === '/mainpage/pirates') {
			return (<Pirates />);
		}
		if (this.props.props === '/mainpage') {
			return (<Home />);
		}
		return (<Home />);
		// TODO
	}

	render() {
		console.log(this.props.props);
		return (
			<div className="content">{this.renderContent()}</div>
		);
	}
}
export default Content;
