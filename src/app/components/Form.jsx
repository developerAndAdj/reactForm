import React from 'react';
import TextInputLabel from './TextInputLabel.jsx';
import TextInputLabelEx from './TextInputLabelEx.jsx';
import FormSectionHeading from './FormSectionHeading.jsx';
import FormSectionSubheading from './FormSectionSubheading.jsx';
import FormInstLine from './FormInstLine.jsx';
import AddEntryBtn from './AddEntryBtn.jsx';
/* For text inputs with examples, use TextInputLabelEx.jsx */
import FormExampleLine from './FormExampleLine.jsx';
import SelectComponent from './SelectComponent.jsx';

/* States JSON */
import stateOptions from '../data/states.json';

export default class SimpleForm extends React.Component {
	render() {
		return(
			<form className="simpleForm">
				<h1>Fill out this form and click the submit button</h1>
				<FormSectionHeading sectionHeading="Basic Information" headingId="basic-information-heading" />
				<FormInstLine instText="All fields are required unless marked as &quot;optional&quot;." />

				<TextInputLabel label="Organization Name" inputName="orgName" labelId="orgNameLbl" headingId="basic-information-heading" />

				<FormSectionHeading sectionHeading="Organization Type" headingId="org-type-heading" />
				<FormInstLine instText="Check all that apply." />
				<TextInputLabel label="Trade Association" inputName="tradeAssociation" labelId="tradeAsscLbl" />

				<FormSectionHeading sectionHeading="How can the Marketplace contact your organization?" />
				<TextInputLabel label="Phone Number" inputName="orgPhoneNum" placeholderText="999-999-9999" labelId="orgPhoneLbl" headingId="org-type-heading" />
				<TextInputLabel label="Email Address" inputName="orgEmailAddr" placeholderText="sample@example.com" labelId="orgEmailLbl" headingId="org-type-heading" />
				<TextInputLabel label="Website URL" inputName="orgWebsite" placeholderText="http://example.com" labelId="orgWebsiteLbl" headingId="org-type-heading" />

				<FormSectionHeading sectionHeading="Address" headingId="address-heading" />
				<TextInputLabel label="Street Address" inputName="orgStreetAddr" labelId="orgAddrLbl" headingId="address-heading" />
				<TextInputLabel label="City" inputName="orgCity" labelId="orgCityLbl" headingId="address-heading" />
				<SelectComponent label="State" inputName="orgState" selectOptions={stateOptions} labelId="orgStateLbl" headingId="address-heading" />
				<TextInputLabel label="Zip Code" inputName="orgZipCode" placeholderText="A valid Zip code (99999), or Zip+4 (99999-9999)" labelId="orgZipLbl" headingId="address-heading" />

				<FormSectionHeading sectionHeading="Points of Contact" headingId="points-of-contact-heading" />
				<FormInstLine instText="Additional instructions here" />
				<div className="repeatableSection">
					<FormSectionSubheading sectionHeading="Contact Person" headingId="contact-person-subheading" />
					<TextInputLabel label="Name" inputName="contactName" labelId="contactNameLbl" headingId="points-of-contact-heading" />
					<TextInputLabel label="Phone Number" inputName="contactPhoneNum" placeholderText="999-999-9999" labelId="contactPhoneLbl" headingId="points-of-contact-heading" />
					<TextInputLabel label="Email Address" inputName="contactEmailAddr" placeholderText="sample@example.com" labelId="contactEmailLbl" headingId="points-of-contact-heading" />
					<AddEntryBtn btnText="Add another contact" />
				</div>

				<FormSectionHeading sectionHeading="How can the general public contact your organization?" headingId="public-contact-heading" />
				<FormInstLine instText="Even more instructions here" />
				<div className="repeatableSection">
					<FormSectionSubheading sectionHeading="Public" headingId="public-subheading" />
					<TextInputLabel label="Name" inputName="locationName" labelId="locNameLbl" headingId="" />
					<TextInputLabel label="Phone Number" inputName="locationPhoneNum" placeholderText="999-999-9999" labelId="locPhoneLbl" headingId="public-contact-heading" />
					<TextInputLabel label="Toll Free Phone Number" inputName="locationTollPhoneNum" placeholderText="800-999-9999" labelId="locTollPhoneLbl" headingId="public-contact-heading" />
					<TextInputLabel label="TTY Phone Number" inputName="locationTtyPhoneNum" placeholderText="999-999-9999" labelId="locTtyPhoneLbl" headingId="public-contact-heading" />
					<TextInputLabel label="Email Address" inputName="locationEmailAddr" placeholderText="sample@example.com" labelId="locEmailLbl" headingId="public-contact-heading" />
					
					<FormSectionSubheading sectionHeading="Address" headingId="location-address-subheading" />
					<FormInstLine instText="Even more sub instructions here" />
					<TextInputLabel label="Street Address" inputName="locationAddress" labelId="locAddrLbl" headingId="public-contact-heading" />
					<TextInputLabel label="City" inputName="locationCity" labelId="locCityLbl" headingId="public-contact-heading" />
					<SelectComponent label="State" inputName="locationState" selectOptions={stateOptions} labelId="locStateLbl" headingId="public-contact-heading" />
					<TextInputLabel label="Zip Code" inputName="locationZipCode" placeholderText="A valid Zip code (99999), or Zip+4 (99999-9999)" labelId="locZipLbl" headingId="public-contact-heading" />
				</div>

				<FormSectionHeading sectionHeading="Organization Details" />

				<FormSectionHeading sectionHeading="Privacy and Security Experience" />
			</form>
		);
	}
}