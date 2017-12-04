import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Alliances extends React.Component {
	constructor() {
		super();
		this.state = {
			alliances: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextAlliances = this.nextAlliances.bind(this);
		this.prevAlliances = this.prevAlliances.bind(this);
	}

	componentWillMount() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/aliancia';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/aliancia';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/ALIANCIA/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ alliances: res });
			})
			.catch(error => console.error(error));
	}
	nextAlliances() {
		console.log(this.state.index);
		if (this.state.index < this.state.alliances.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevAlliances() {
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.alliances.length === 0) {
			return;
		}
		const alliancesToRender = this.state.alliances.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const alliances = alliancesToRender.map((alliance) => {
			return (this.renderRow(alliance));
		});
		return alliances;
	}

	renderRow(alliance) {
		return (
			<tr className="riadok" key={alliance.ID_ALIANCIA}>
                <td>{alliance.ID_ALIANCIA}</td>
				<td>{alliance.NAZOV}</td>
				<td>{alliance.PRISTAV}</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="content">
				<div className="search_info">Vyhľadať alianciu</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>ID Aliancie</th>
							<th>Názov</th>
                            <th>Domovský prístav</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevAlliances}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextAlliances}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_alliance">
						<button  className="w3-pink">Vytvoriť alianciu</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Alliances;
