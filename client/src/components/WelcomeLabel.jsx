import React from 'react';

class WelcomeLabel extends React.Component {
	render() {
		const TextStyle = () => ({
			fontFamily: 'Berkshire Swash, cursive',
			color: '#fefefe',
			textShadow: '2px 2px 5px #999',
			fontSize: '60px',
			width: '100%',
			textAlign: 'center',
			height: '100px',
			position: 'absolute',
			top: '50%',
			marginTop: '-320px',
		});
		return (
			<div style={TextStyle()}>Vitajte v Pirátskom Informačnom Systéme</div>
		);
	}
}

export default WelcomeLabel;
