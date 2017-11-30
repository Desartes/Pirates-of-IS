import React from 'react';
import { Link } from 'react-router-dom';
import style from './styleMainPage.css';
import BarButton from './BarButton';
import Content from './Content';

const picStyle = {
	backgroundImage: 'url(./images/flag.svg)',
	float: 'left',
	display: 'block',
	width: '170px',
	height: '120px',
	backgroundSize: 'cover',
};

class MainPage extends React.Component {
	constructor() {
		super();
		this.state = {
			links: [{
				link: '/mainpage/fights',
				label: 'Bitky',
				key: 'bitky',
			}, {
				link: '/mainpage/crews',
				label: 'Posádky',
				key: 'posadky',
			}, {
				link: '/mainpage/ships',
				label: 'Lode',
				key: 'lode',
			}, {
				link: '/',
				label: 'Odhlásiť',
				key: 'odhlasit',
			}],
		};
	}

	renderButtons() {
		return this.state.links.map((link) => {
			return (
				<BarButton props={link} key={link.key} />
			);
		});
	}

	render() {
		return (
			<div id="mainpage">
				<div className="w3-container w3-pale-yellow header">
					<div id="welcome_pic" style={picStyle} />
					<div id="nadpis">
						Pirátsky Informačný Systém
					</div>
				</div>
				<div className="w3-bar top_bar w3-teal" >
					{this.renderButtons()}
				</div>
				<div className="w3-sidebar w3-bar-block w3-teal sidebar" >
					<div className="sidebar_text">Meno</div>
					<div className="sidebar_text">Jožo</div>
					<div className="sidebar_text">Prezívka</div>
					<div className="sidebar_text">Pozícia</div>
					<div className="sidebar_text">Vek</div>
					<div className="sidebar_text">Farba fúzov</div>
					<div className="sidebar_text">Charakteristiky</div>
					<div className="sidebar_text">Čas strávený v posádke</div>
					<div className="sidebar_space">
						<BarButton props={{ link: '/mainpage/user_details', label: 'Zmeniť údaje' }} />
						<BarButton props={{ link: '/', label: 'Odhlásiť' }} />
					</div>
				</div>

				<div className="w3-container" id="page">
					<Content className="content" props={this.props.location.pathname} />
				</div>
			</div>
		);
	}
}

export default MainPage;
