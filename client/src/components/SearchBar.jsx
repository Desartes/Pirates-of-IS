import React from 'react';
import style from './styleSearchBar.css';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searching: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ searching: event.target.value });
	}

	render() {
		return (
			<form className="search_form" onSubmit={this.props.fetching}>
				<input className="search_input" type="text" value={this.state.age} onChange={this.props.searching} />
				<input className="submit_search" type="submit" value="Hľadať" />
			</form>
		);
	}
}

export default SearchBar;
