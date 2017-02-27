import React from 'react';

export default class FormHeading extends React.Component {
	render() {
		return(
			<h1 className="{this.props.headingClass">
				{this.props.heading}
			</h1>
		);
	}
}