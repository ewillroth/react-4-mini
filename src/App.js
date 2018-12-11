import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import routes from './routes.js';

class App extends Component {
	render() {
	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Edit <code>src/App.js</code> and save to reload.
			</p>
		<Link to={'/'}>Route 1</Link>
		<Link to={'/2'}>Route 2</Link>
		<Link to={'/3'}>Route 3</Link>
		{routes}
		</header>

		</div>
	);
	}
	}

export default App;
