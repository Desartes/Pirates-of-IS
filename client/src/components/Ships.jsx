import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Ships extends React.Component {
	constructor() {
		super();
		this.state = {
			ships: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextShips = this.nextShips.bind(this);
		this.prevShips = this.prevShips.bind(this);
	}

	componentWillMount() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/lod';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/lod';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/LOD/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ ships: res });
			})
			.catch(error => console.error(error));
	}
	nextShips() {
		console.log(this.state.index);
		if (this.state.index < this.state.ships.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevShips() {
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.ships.length === 0) {
			return;
		}
		const shipsToRender = this.state.ships.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const ships = shipsToRender.map((ship) => {
			return (this.renderRow(ship));
		});
		return ships;
	}

	renderRow(ship) {
		return (
			<tr className="riadok" key={ship.ID_LOD}>
				<td>{ship.ID_LOD}</td>
				<td>{ship.TYP}</td>
				<td>{ship.KAPACITA}</td>
				<td>{ship.DIV_KAPITAN}</td>
				<td>
					<button className="table_button_top">Detaily</button>
				</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="content">
				<div className="search_info">Vyhľadať loď</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>ID Lode</th>
							<th>Typ</th>
							<th>Kapacita</th>
							<th>Divízny kapitán</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevShips}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextShips}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_ship">
						<button  className="w3-pink">Pridať loď</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Ships;
