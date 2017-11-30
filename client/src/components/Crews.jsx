import React from 'react';


class Crews extends React.Component {
	constructor() {
		super();
		this.state = {
			crews: [],
		};
	}

	componentDidMount() {
		this.shipGenerator();
	}
	shipGenerator() {
		const crews = [];
		for (let i = 0; i < 5; i++) {
			crews.push({
				id: i,
				name: 'Morski vlci',
				captain: 'Morgan',
				ships: 'cerna perla, bludny holandan',
			});
		}
		this.setState({ crews });
	}

	renderRows() {
		const crews = this.state.crews.map((crew) => {
			return (this.renderRow(crew));
		});
		return crews;
	}
	renderRow(crew) {
		return (
			<tr key={crew.id}>
				<td>{crew.id}</td>
				<td>{crew.name}</td>
				<td>{crew.captain}</td>
				<td>{crew.ships}</td>
			</tr>
		);
	}
	render() {
		console.log('som v crews');
		console.log(this.renderRows());
		return (
			<table>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		);
	}
}
export default Crews;
