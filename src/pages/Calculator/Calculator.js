import React from 'react'
import { BoilingVerdict } from './BoilingVerdict'
import { Temperature } from './Temperature'

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			temperature: '',
			scale: ''
		}
	}

	handleCelsiusChange(temperature) {
		this.setState({
			temperature,
			scale: 'C'
		})
	}

	handleFahrenheitChange(temperature) {
		this.setState({
			temperature,
			scale: 'F'
		})
	}

	toCelsius(fahrenheit) {
		return ((fahrenheit - 32) * 5) / 9
	}

	toFahrenheit(celsius) {
		return (celsius * 9) / 5 + 32
	}

	tryConvert(temperature, convert) {
		const input = parseFloat(temperature)
		if (Number.isNaN(input)) {
			return ''
		}
		const output = convert(input)
		const rounded = Math.round(output * 1000) / 1000
		return rounded.toString()
	}

	render() {
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius =
			scale === 'F' ? this.tryConvert(temperature, this.toCelsius) : temperature
		const fahrenheit =
			scale === 'C'
				? this.tryConvert(temperature, this.toFahrenheit)
				: temperature

		return (
			<div>
				<Temperature
					scale="C"
					temperature={celsius}
					onTemperatureChange={e => this.handleCelsiusChange(e)}
				></Temperature>
				<Temperature
					scale="F"
					temperature={fahrenheit}
					onTemperatureChange={e => this.handleFahrenheitChange(e)}
				></Temperature>
				<BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
			</div>
		)
	}
}

export { Calculator }
