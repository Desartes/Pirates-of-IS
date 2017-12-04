import React from 'react';
import SearchBar from './SearchBar';


const picStyle = {
	backgroundImage: 'url(../images/X.png)',
	display: 'block',
	maWidth: '100%',
	maxHeight: '100%',
	backgroundSize: 'cover',
};

class Pirates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pirates: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextPirates = this.nextPirates.bind(this);
		this.prevPirates = this.prevPirates.bind(this);
	}
	componentWillMount() {
		// http://www.stud.fit.vutbr.cz/~xtavel00/db_control/modify/TABULKA/'
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/pirat';
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
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/pirat';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/PIRAT/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ pirates: res, index: 5 });
			})
			.catch(error => console.error(error));
	}
	nextPirates() {
		console.log(this.state.index);
		if (this.state.index < this.state.pirates.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevPirates() {
		console.log(this.state.index);
		console.log(this.state.index - this.state.numOfRendering);
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.pirates.length === 0) {
			return;
		}
		const piratesToRender = this.state.pirates.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const pirates = piratesToRender.map((pirate) => {
			return (this.renderRow(pirate));
		});
		return pirates;
	}

	renderRow(pirate) {
		console.log('render row');
		return (
			<tr className="riadok" key={pirate.MENO}>
				<td>{pirate.MENO}</td>
				<td>{pirate.PREZIVKA}</td>
				<td>{pirate.VEK}</td>
				<td>{pirate.POZICIA}</td>
				<td>
					<button className="table_button_top">Verbovať</button>
					<button className="table_button">Detaily</button>
				</td>
			</tr>
		);
	}

	render() {
		console.log('som v pirates');
		return (
			<div className="content">
				<div className="search_info">Vyhľadať piráta</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>Meno</th>
							<th>Prezívka</th>
							<th>Vek</th>
							<th>Pozícia</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevPirates}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextPirates}>Nasledujúci</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Pirates;
