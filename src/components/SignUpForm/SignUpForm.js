import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormTemplate from '../../utils/Form';
import { signUpSchema } from '../../utils/validation';
import { withFirebase } from '../Firebase/context';

const SignUpForm = props => {
	const [initialValues] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});

	const fieldsConfig = [
		{ type: 'text', name: 'email', placeholder: 'Email' },
		{ type: 'password', name: 'password', placeholder: 'Password' },
		{
			type: 'password',
			name: 'confirmPassword',
			placeholder: 'Confirm password'
		}
	];

	const onSuccessAction = response => {
		console.log(response);
	};

	const {
		firebase: { doCreateUserWithEmailAndPassword }
	} = props;
	return (
		<FormTemplate
			initialValues={initialValues}
			fields={fieldsConfig}
			validationSchema={signUpSchema}
			firebaseAction={doCreateUserWithEmailAndPassword}
			onSuccessAction={onSuccessAction}
			{...props}
		/>
	);
};

SignUpForm.propTypes = {
	initialValues: PropTypes.object,
	firebase: PropTypes.object
};

export default withFirebase(SignUpForm);
