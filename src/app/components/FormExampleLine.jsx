import React from 'react';

export default class FormExampleLine extends React.Component {
	render() {
		return(
			<p className="exampleLine">
				{this.props.exampleText}
			</p>
		);
	}
}