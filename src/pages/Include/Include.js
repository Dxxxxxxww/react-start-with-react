import React from 'react'

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.left}
			{props.right}
		</div>
	)
}

function Include() {
	return (
		<FancyBorder
			color="blue"
			left={<h1 className="Dialog-title">Welcome</h1>}
			right={
				<p className="Dialog-message">Thank you for visiting our spacecraft!</p>
			}
		></FancyBorder>
	)
}

export { Include }
