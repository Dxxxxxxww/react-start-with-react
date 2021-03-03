import React from 'react'
import './App.css'
// import logo from './logo.svg'
// import { Clock } from './pages/Clock/Clock'
// import { MyForm } from './pages/Form/Form'
// import { Calculator } from './pages/Calculator/Calculator'
// import { Include } from './pages/Include/Include'
import { Example } from './hooks/Example/Example'

// 核心概念
// const author = {
// 	firstName: 'xx',
// 	lastName: 'D'
// }

// const formatName = function(author) {
// 	return `${author.firstName} ${author.lastName}`
// }

// const Welcome = function(props) {
// 	return <p>haha, {props.name}</p>
// }

// const MultipleWelcome = function(props) {
// 	return (
// 		<div>
// 			<Welcome name="y" />
// 			<Welcome name="t" />
// 			<Welcome name="t" />
// 		</div>
// 	)
// }

function App() {
	return (
		<div className="App">
			<Example></Example>
		</div>
	)
}

export default App
