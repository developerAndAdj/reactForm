import React from 'react';

export default class AddEntryBtn extends React.Component {
	render() {
		return(
			<button>
				{this.props.btnText}
			</button>
		);
	}
}