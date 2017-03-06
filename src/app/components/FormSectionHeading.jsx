import React from 'react';

export default class FormSectionHeading extends React.Component {
	render() {
		return(
			<h2 id={this.props.headingId} tabindex="-1">
				{this.props.sectionHeading}
			</h2>
		);
	}
}