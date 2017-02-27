import React from 'react';

export default class FormInstLine extends React.Component {
	render() {
		return(
			<p className="instLine">
				{this.props.instText}
			</p>
		);
	}
}