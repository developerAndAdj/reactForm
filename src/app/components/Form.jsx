import React from 'react';
import TextInputLabel from './TextInputLabel.jsx';
import FormSectionHeading from './FormSectionHeading.jsx';

export default class SimpleForm extends React.Component {
	render() {
		return(
			<form className="simpleForm">
				<FormSectionHeading sectionHeading="Basic Information" />
				<TextInputLabel label="* Organization Name" inputName="orgName" />

				<FormSectionHeading sectionHeading="Organization Type" />
				<TextInputLabel label="Trade Association" inputName="tradeAssociation" />

				<FormSectionHeading sectionHeading="How can the Marketplace contact your organization?" />
				<TextInputLabel label="* Phone Number" inputName="phoneNum" />
				<TextInputLabel label="* Email Address" inputName="emailAddr" />
				<TextInputLabel label="* Website URL" inputName="website" />

				<FormSectionHeading sectionHeading="Address" />
				<TextInputLabel label="* Street Address" inputName="streetAddr" />
				<TextInputLabel label="* City" inputName="city" />
				<TextInputLabel label="* Zip Code" inputName="zipCode" />

				<FormSectionHeading sectionHeading="Points of Contact" />

				<FormSectionHeading sectionHeading="How can the general public contact your organization?" />
			</form>
		);
	}
}