import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Fights extends React.Component {
	constructor() {
		super();
		this.state = {
			fights: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextFights = this.nextFights.bind(this);
		this.prevFights = this.prevFights.bind(this);
	}

	componentWillMount() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/bitka';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/bitka';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/BITKA/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ fights: res });
			})
			.catch(error => console.error(error));
	}
	nextFights() {
		console.log(this.state.index);
		if (this.state.index < this.state.fights.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevFights() {
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.fights.length === 0) {
			return;
		}
		const fightsToRender = this.state.fights.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const fights = fightsToRender.map((fight) => {
			return (this.renderRow(fight));
		});
		return fights;
	}

	renderRow(fight) {
		return (
			<tr className="riadok" key={fight.ID_BITKA}>
				<td>{fight.ID_BITKA}</td>
				<td>{fight.POCET_STRAT}</td>
				<td>{fight.PRISTAV}</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="content">
				<div className="search_info">Vyhľadať bitku</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>ID Bitky</th>
							<th>Počet strát</th>
							<th>Prístav</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevFights}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextFights}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_fight">
						<button  className="w3-pink">Pridať bitku</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Fights;
