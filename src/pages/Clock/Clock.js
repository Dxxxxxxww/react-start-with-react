import React from 'react'

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

function NumberList(props) {
	const numbers = props.numbers
	const listItems = numbers.map(num => <li key={num.toString()}>{num * 2}</li>)
	return <ul>{listItems}</ul>
}

// 通过 state 来使 Clock 自动更新
class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			isToggle: true,
			numbers: [1, 2, 3, 4, 5, 6],
			listItems: []
		}
	}
	componentDidMount() {
		this.timeId = setInterval(() => this.tick(), 1000)
		// const listItems = this.state.numbers.map(num => <li>{num * 2}</li>)
		// this.setState({
		// 	listItems
		// })
		this.setState(state => ({
			listItems: state.numbers.map(num => <li>{num * 2}</li>)
		}))
	}
	componentWillUnmount() {
		clearInterval(this.timeId)
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
	handleClick(e) {
		e.preventDefault()
		console.log('hello world', this)
	}
	handleToggleLink() {
		console.log(arguments)
		this.setState(state => ({
			isToggle: !state.isToggle
		}))
	}
	render() {
		return (
			<div>
				<h1>Hello world</h1>
				<h2 onClick={e => this.handleToggleLink(e, 1, 2, 3, 4, 5, 6, 7, 8)}>
					It is {this.state.date.toLocaleString()}.
				</h2>
				{this.state.isToggle && (
					<a href="https://www.baidu.com" onClick={e => this.handleClick(e)}>
						baidu
					</a>
				)}
				{/* <ul>{this.state.listItems}</ul> */}
				<NumberList numbers={this.state.numbers} />
			</div>
		)
	}
}

export { Clock }
