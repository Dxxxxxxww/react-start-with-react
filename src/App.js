import React from 'react';
import logo from './logo.svg';
import './App.css';

const author = {
  firstName: 'xx',
  lastName: 'D'
}

const formatName = function (author) {
  return `${author.firstName} ${author.lastName}`
}

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Author: {formatName(author)}</p>
			</header>
		</div>
	)
}

export default App;
