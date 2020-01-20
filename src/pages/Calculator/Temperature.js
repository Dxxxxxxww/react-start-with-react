import React from 'react'

const scaleNames = {
	C: 'Celsius',
	F: 'Fahrenheit'
}

class Temperature extends React.Component {

	handleChange(e) {
    // this.setState({ temperature: e.target.value })
    this.props.onTemperatureChange(e.target.value)
	}

	render() {
		// const temperature = this.state.temperature
		const temperature = this.props.temperature
		const scale = scaleNames[this.props.scale]
		return (
			<form>
				<fieldset>
					<legend>Enter temperature in {scale}:</legend>
					<input value={temperature} onChange={e => this.handleChange(e)} />
				</fieldset>
			</form>
		)
	}
}

export { Temperature }
