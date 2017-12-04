import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Fleets extends React.Component {
	constructor() {
		super();
		this.state = {
			fleets: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextFleets = this.nextFleets.bind(this);
		this.prevFleets = this.prevFleets.bind(this);
	}

	componentWillMount() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/flotila';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/flotila';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/FLOTILA/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ fleets: res });
			})
			.catch(error => console.error(error));
	}
	nextFleets() {
		console.log(this.state.index);
		if (this.state.index < this.state.fleets.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevFleets() {
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.fleets.length === 0) {
			return;
		}
		const fleetsToRender = this.state.fleets.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const fleets = fleetsToRender.map((fleet) => {
			return (this.renderRow(fleet));
		});
		return fleets;
	}

	renderRow(fleet) {
		return (
			<tr className="riadok" key={fleet.ID_FLOT}>
				<td>{fleet.ID_FLOT}</td>
				<td>{fleet.FLOT_KAPITAN}</td>
				<td>{fleet.VLASTNI_POS}</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="content">
				<div className="search_info">Vyhľadať flotilu</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>ID Flotily</th>
							<th>Flotilny kapitan</th>
							<th>Flotilu vlastní posádka</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevFleets}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextFleets}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_fleet">
						<button  className="w3-pink">Vytvoriť flotilu</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Fleets;
