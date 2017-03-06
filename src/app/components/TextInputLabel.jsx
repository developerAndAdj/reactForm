import React from 'react';

export default class TextInputLabel extends React.Component {
	render() {
		return(
			<div className="inputContainer">
				<label id={this.props.labelId} htmlFor={this.props.inputName} title={this.props.label}>
					{this.props.label}
				</label>
				<input type="text" id={this.props.inputName} name={this.props.inputName} placeholder={this.props.placeholderText} aria-labelledby={[this.props.labelId, this.props.headingId].join(' ')} />
			</div>
		);
	}
}