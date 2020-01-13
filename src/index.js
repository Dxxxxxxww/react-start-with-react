import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// const tick = function() {
// 	const element = (
// 		<div>
// 			<h1>hello world!</h1>
// 			<h2>it is {new Date().toString()}</h2>
// 		</div>
//   )
//   console.log(123)
// 	ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
