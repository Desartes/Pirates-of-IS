import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


class Ports extends React.Component {
	constructor() {
		super();
		this.state = {
			ports: [],
			index: 5,
			numOfRendering: 5,
			searching: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextPorts = this.nextPorts.bind(this);
		this.prevPorts = this.prevPorts.bind(this);
	}

	componentWillMount() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/pristav';
		this.tryFetching(url);
	}
	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	handleSubmit(event) {
		const strSearching = this.state.searching.trim();
		let url;
		if (strSearching.length === 0) {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/get_table/pristav';
		} else {
			url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/search/PRISTAV/' + strSearching;
		}
		this.tryFetching(url);
		event.preventDefault();
	}
	tryFetching(url) {
		fetch(url)
			.then(response => response.json())
			.then((res) => {
				this.setState({ ports: res });
			})
			.catch(error => console.error(error));
	}
	nextPorts() {
		console.log(this.state.index);
		if (this.state.index < this.state.ports.length) {
			this.setState({ index: this.state.index + this.state.numOfRendering });
		}
	}
	prevPorts() {
		if (this.state.index > this.state.numOfRendering) {
			this.setState({ index: this.state.index - this.state.numOfRendering });
		}
	}

	renderRows() {
		if (this.state.ports.length === 0) {
			return;
		}
		const portsToRender = this.state.ports.slice(this.state.index - this.state.numOfRendering, this.state.index);
		const ports = portsToRender.map((port) => {
			return (this.renderRow(port));
		});
		return ports;
	}

	renderRow(port) {
		return (
			<tr className="riadok" key={port.ID_BITKA}>
				<td>{port.ID_PRIST}</td>
				<td>{port.KAPACITA}</td>
				<td>{port.LOKALITA}</td>
				<td>{port.TEORITORIUM_POSADKY}</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="content">
				<div className="search_info">Vyhľadať prístav</div>
				<SearchBar fetching={this.handleSubmit} searching={this.handleChange} />
				<table className="w3-table w3-striped w3-bordered tabulka">
					<thead>
						<tr>
							<th>ID Prístavu</th>
							<th>Kapacita</th>
							<th>Lokalita</th>
							<th>Teritórium posádky</th>
						</tr>
					</thead>
					<tbody className="tabulka_telo">
						{this.renderRows()}
					</tbody>
				</table>
				<div className="next_prev">
					<div className="next_prev_div">
						<button className="next_prev_buttons" onClick={this.prevPorts}>Predchodzí</button>
						<button className="next_prev_buttons" onClick={this.nextPorts}>Nasledujúci</button>
					</div>
					<Link className="add_button" to="/mainpage/add_port">
						<button  className="w3-pink">Pridať prístav</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Ports;
