import React from 'react';

export default class TextInputLabel extends React.Component {
	render() {
		return(
			<label htmlFor="{this.props.inputName}">
				{this.props.label}
				<input type="text" name="{this.props.inputName}" />
			</label>
		);
	}
}