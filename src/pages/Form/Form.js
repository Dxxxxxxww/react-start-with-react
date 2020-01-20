import React from 'react'

class MyForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '', selected: 'tz' }
	}

	handleChange(e) {
		this.setState({
			value: e.target.value.toUpperCase()
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.value)
	}

	handleSelect(e) {
    console.log(e.target.value)
    this.setState({
			selected: e.target.value
		})
  }

	render() {
		return (
			<form
				onSubmit={e => {
					this.handleSubmit(e)
				}}
			>
				<label>
					name:
					<input
						type="text"
						// value={this.state.value}
						value="hi"
						onChange={e => this.handleChange(e)}
					/>
				</label>
				<input type="submit" value="提交" />
				<select
					value={this.state.selected}
          onChange={e => this.handleSelect(e)}
          
				>
					<option value="pt">葡萄</option>
					<option value="tz">桃子</option>
					<option value="nm">柠檬</option>
					<option value="yz">柚子</option>
					<option value="jz">橘子</option>
				</select>
			</form>
		)
	}
}

export { MyForm }
