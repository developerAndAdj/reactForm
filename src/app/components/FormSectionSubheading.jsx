import React from 'react';

export default class FormSectionSubheading extends React.Component {
	render() {
		return(
			<h3 id={this.props.headingId} tabindex="-1">
				{this.props.sectionHeading}
			</h3>
		);
	}
}