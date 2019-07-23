import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { signUpSchema } from "../../utils/validation";

class SignUpForm extends Component {
  state = {
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email" },
    { type: "password", name: "password", placeholder: "Password" },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm password"
    }
  ];

  onSuccessAction = (response) => {
    console.log(response);
  };

  render() {
    const { initialValues } = this.state;
    const {
      firebase: { doCreateUserWithEmailAndPassword }
    } = this.props;
    return (
      <FormTemplate
        initialValues={initialValues}
        fields={this.fieldsConfig}
        validationSchema={signUpSchema}
        firebaseAction={doCreateUserWithEmailAndPassword}
        onSuccessAction={this.onSuccessAction}
        {...this.props}
      />
    );
  }
}

SignUpForm.propTypes = {
  initialValues: PropTypes.object,
  firebase: PropTypes.object,
};

export default SignUpForm;
