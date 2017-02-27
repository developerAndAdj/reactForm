import React from 'react';

export default class FormSectionHeading extends React.Component {
	render() {
		return(
			<h2>
				{this.props.sectionHeading}
			</h2>
		);
	}
}