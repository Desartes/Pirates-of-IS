import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import style from './styleMainPage.css';
import BarButton from './BarButton';
import Content from './Content';
import SearchBar from './SearchBar';
import localStorageComp from './localStorageComp';

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
				link: '/mainpage',
				label: 'Domov',
				key: 'domov',
			}, {
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
				link: '/mainpage/fleets',
				label: 'Flotily',
				key: 'flotily',
			}, {
				link: '/mainpage/alliances',
				label: 'Aliancie',
				key: 'aliancie',
			}, {
				link: '/mainpage/ports',
				label: 'Prístavy',
				key: 'prístavy',
			}, {
				link: '/mainpage/pirates',
				label: 'Piráti',
				key: 'pirati',
			}],
			user: {},
			redirect: false,
		};
		this.handleLogout = this.handleLogout.bind(this);
	}
	componentWillMount() {
		const finalUser = localStorageComp.getUser();
		this.setState({ user: finalUser });
	}
	handleLogout() {
		const url = 'http://www.stud.fit.vutbr.cz/~xtavel00/db_control/logout/' + this.state.user.HASH + '/';
		fetch(url)
			.then(response => response.text())
			.then((res) => {
				if (res === false) {
					;
				} else {
					console.log(res);
					console.log('odhlasujem');
					localStorageComp.clearStorage();
					this.setState({ redirect: true });
				}
			})
			.catch(error => console.error(error));
	}

	renderButtons() {
		return this.state.links.map((link) => {
			return (
				<BarButton props={link} key={link.key} />
			);
		});
	}
	

	render() {
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to="/" />;
		}
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
					<div className="sidebar_text">Meno:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.MENO}</div>
					<div className="sidebar_text">Prezívka:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.PREZIVKA}</div>
					<div className="sidebar_text">Vek:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.VEK}</div>
					<div className="sidebar_text">Pozícia:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.POZICIA}</div>
					<div className="sidebar_text">Farba fúzov:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.FARBA_FUZOV}</div>
					<div className="sidebar_text">Charakteristiky:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.CHARAKTERISTIKY}</div>
					<div className="sidebar_text">Člen posádky:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.CLEN_POSADKY}</div>
					<div className="sidebar_text">Čas strávený v posádke:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.CAS_V_POSADKE}</div>
					<div className="sidebar_text">Kapitánom posádky:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.KAPITANOM_POSADKY}</div>
					<div className="sidebar_text">Posádkou lode:</div>
					<div className="sidebar_text sidebar_values">{this.state.user.POSADKOU_LODE}</div>
					<div className="sidebar_space">
						<BarButton props={{ link: '/mainpage/user_details', label: 'Zmeniť údaje' }} />
						<button className="w3-bar-item w3-button " onClick={this.handleLogout}>Odhlásiť</button>
					</div>
				</div>

				<div className="w3-container content" id="page">
					<Content props={this.props.location.pathname} />
				</div>
			</div>
		);
	}
}

export default MainPage;
