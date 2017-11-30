import React from 'react';


class Fights extends React.Component {
	constructor() {
		super();
		this.state = {
			fights: [],
		};
	}

	componentDidMount() {
		this.shipGenerator();
	}
	shipGenerator() {
		const fights = [];
		for (let i = 0; i < 5; i++) {
			fights.push({
				id: i,
				port: 'Brno',
				deaths: 58,
				crews: 'retardi, psi',
				ships: 'cerna perla, bludny holandan',
				aliances: ' ',
			});
		}
		this.setState({ fights });
	}

	renderRows() {
		const fights = this.state.fights.map((fight) => {
			return (this.renderRow(fight));
		});
		return fights;
	}
	renderRow(fight) {
		return (
			<tr key={fight.id}>
				<td>{fight.id}</td>
				<td>{fight.port}</td>
				<td>{fight.deaths}</td>
				<td>{fight.crews}</td>
				<td>{fight.ships}</td>
				<td>{fight.aliances}</td>
			</tr>
		);
	}
	render() {
		console.log('som vo fights');
		console.log(this.renderRows());
		return (
			<table className="w3-table w3-striped">
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		);
	}
}
export default Fights;
