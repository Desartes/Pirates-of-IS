import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Crews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			crews: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextCrews = this.nextCrews.bind(this);
		this.prevCrews = this.prevCrews.bind(this);
	}
	componentWillMount() {
		// http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/TABULKA/'
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/posadka';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		//alert('Something is searching: ' + this.state.searching);
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/posadka';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/POSADKA/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ crews: res, index: 5 });
			})
			.catch(error => console.error(error));
	}
	nextCrews() {
		console.log(this.state.index);
		if (this.state.index < this.state.crews.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevCrews() {
		console.log(this.state.index);
		console.log(this.state.index - this.state.numOfRendering);
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.crews.length === 0) {
			return;
		}
		const crewsToRender = this.state.crews.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const crews = crewsToRender.map((crew) => {
			return (this.renderRow(crew));
		});
		return crews;
	}

	renderRow(crew) {
		console.log('render row');
		return (
			<tr className="riadok" key={crew.MENO}>
				<td>{crew.MENO}</td>
				<td>{crew.VLAJKA}</td>
				<td>{crew.KAPITAN}</td>
				<td>{crew.SUCASTOU_ALIANCIE}</td>
				<td>
					<button className="table_button_top">Upraviť</button>
					<button className="table_button">Detaily</button>
				</td>
			</tr>
		);
	}

	render() {
		console.log('som v crews');
		return (
			<div className="content">
				<div className="search_info">Vyhľadať posádku</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>Meno</th>
							<th>Vlajka</th>
							<th>Kapitán</th>
							<th>Súčasťou aliancie</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevCrews}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextCrews}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_crew">
						<button  className="w3-pink">Vytvoriť posádku</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Crews;
