import React from 'react';

export default class SelectComponent extends React.Component {
	render() {
		return(
			<div className="inputContainer">
				<label id={this.props.labelId} htmlFor={this.props.inputName} title={this.props.label}>
					{this.props.label}
				</label>
				<select id={this.props.inputName} name={this.props.inputName}>
                    <option></option>
                    {this.props.selectOptions.states.map((obj, i) => <option key={i} value={obj.value}>{obj.display}</option>)}
                </select>
			</div>
		);
	}
}