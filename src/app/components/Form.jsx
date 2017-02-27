import React from 'react';
import TextInputLabel from './TextInputLabel.jsx';
import FormSectionHeading from './FormSectionHeading.jsx';
import FormInstLine from './FormInstLine.jsx';
import FormExampleLine from './FormExampleLine.jsx';

export default class SimpleForm extends React.Component {
	render() {
		return(
			<form className="simpleForm">
				<h1>Fill out this form and click the submit button</h1>
				<FormSectionHeading sectionHeading="Basic Information" />
				<FormInstLine instText="All fields marked with an asterisk (*) are required." />

				<TextInputLabel label="* Organization Name" inputName="orgName" />

				<FormSectionHeading sectionHeading="Organization Type" />
				<FormInstLine instText="Check all that apply." />
				<TextInputLabel label="Trade Association" inputName="tradeAssociation" />

				<FormSectionHeading sectionHeading="How can the Marketplace contact your organization?" />
				<TextInputLabel label="* Phone Number" inputName="phoneNum" />
				<FormExampleLine exampleText="999-999-9999" />
				<TextInputLabel label="* Email Address" inputName="emailAddr" />
				<FormExampleLine exampleText="sample@example.com" />
				<TextInputLabel label="* Website URL" inputName="website" />
				<FormExampleLine exampleText="http://example.com" />

				<FormSectionHeading sectionHeading="Address" />
				<TextInputLabel label="* Street Address" inputName="streetAddr" />
				<TextInputLabel label="* City" inputName="city" />
				/* TODO: Dropdown for state here */
				<TextInputLabel label="* Zip Code" inputName="zipCode" />
				<FormExampleLine exampleText="A valid Zip code (99999), or Zip+4 (99999-9999)" />

				<FormSectionHeading sectionHeading="Points of Contact" />
				<FormInstLine instText="Additional instructions here" />

				<FormSectionHeading sectionHeading="How can the general public contact your organization?" />

				<FormSectionHeading sectionHeading="Organization Details" />

				<FormSectionHeading sectionHeading="Privacy and Security Experience" />
			</form>
		);
	}
}