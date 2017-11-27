import React from 'react';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 2,
		};

		setTimeout(() => {
			this.setState({ a: 5 });
		}, 2000);
	}

	addNum(b) {
		return this.state.a + b;
	}

	render() {
		const style = () => ({
			color: 'red',
		});
		const number = this.addNum(2);
		return (
			<div style={style()}>Hello dashboard { number }</div>
		);
	}
}

export default Dashboard;
