import React from 'react';


class Ships extends React.Component {
	constructor() {
		super();
		this.state = {
			lode: [],
		};
	}

	componentDidMount() {
		this.shipGenerator();
	}
	shipGenerator() {
		const lode = [];
		for (let i = 0; i < 5; i++) {
			lode.push({
				id: i,
				pristav: 'Brno',
				kapacita: 58,
				kapitan: 'Filip Kolesar',
				typ: 'bojova',
				posadka: 5,
				flotila: 'nejakaFlotila',
			});
		}
		this.setState({ lode });
	}


	tryFetching() {
		fetch('http://www.stud.fit.vutbr.cz/~xletov00/test.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				key: 'test',
			}),
		})
			.then(response => response.json())
			.then((res) => {
				console.log(res);
			})
			.catch(error => console.error(error));
		/* const x = () => fetch('http://www.stud.fit.vutbr.cz/~xletov00/skuska.txt', {
		})
			.then((res) => {
				res.text();
			});
		console.log(x().then((res) => {
			res.text();
		})); */

		/* fetch('http://www.stud.fit.vutbr.cz/~xletov00/test.php', {
			method: 'get',
			mode: 'no-cors',
			// may be some code of fetching comes here
		})
			.then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.text();
				}
				throw new Error(response.statusText);
			})
			.then((response) => {
				console.log(response);
			}); */
		/* fetch('http://www.stud.fit.vutbr.cz/~xletov00/test.php', {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				key: 'test',
			}),
		})
			 .then(response => response.json())
			.then((res) => {
				alert(res.message);
			})
			.then(response => console.log(response.json()))
			.catch(error => console.error(error)); */
	}
	renderRows() {
		const ships = this.state.lode.map((ship) => {
			return (this.renderRow(ship));
		});
		return ships;
	}

	renderRow(ship) {
		return (
			/* <tr>
				<td>
					{this.tryFetching()}
				</td>
			</tr> */
			<tr key={ship.id}>
				<td>{this.id}</td>
				<td>{ship.pristav}</td>
				<td>{ship.kapacita}</td>
				<td>{ship.kapitan}</td>
				<td>{ship.typ}</td>
				<td>{ship.posadka}</td>
				<td>{ship.flotila}</td>
			</tr>
		);
	}

	render() {
		console.log('som v ships');
		/* console.log(this.renderRows()); */
		return (
			<table>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		);
	}
}
export default Ships;
