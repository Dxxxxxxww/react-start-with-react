import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Clock } from './pages/Clock/Clock'
import { MyForm } from './pages/Form/Form'
import { Calculator } from './pages/Calculator/Calculator'
import { Include } from './pages/Include/Include'

const author = {
	firstName: 'xx',
	lastName: 'D'
}

const formatName = function(author) {
	return `${author.firstName} ${author.lastName}`
}

const Welcome = function(props) {
	return <p>haha, {props.name}</p>
}

const MultipleWelcome = function(props) {
	return (
		<div>
			<Welcome name="y" />
			<Welcome name="t" />
			<Welcome name="t" />
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
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
				<MultipleWelcome name="ytt" />
			</header>
			<Clock></Clock>
			<MyForm></MyForm>
			<Calculator></Calculator>
			<Include></Include>
		</div>
	)
}

export default App
