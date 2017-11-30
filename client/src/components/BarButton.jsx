import React from 'react';
import { Link } from 'react-router-dom';
/* import style from './styleBarButton.css'; */

const style = {
	
};

class BarButton extends React.Component {
	render() {
		return (
			<Link style={style} to={this.props.props.link} className="w3-bar-item w3-button ">{this.props.props.label} </Link>
		);
	}
}

export default BarButton;
