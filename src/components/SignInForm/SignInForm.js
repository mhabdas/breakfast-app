import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { SIGN_IN_URL } from "../../utils/endpoints";
import { signInSchema } from "../../utils/validation";

class SignInForm extends Component {
  state = {
    initialValues: {
      email: "",
      password: "",
    }
  };

  generateAxiosObject = values => {
    return {
      method: "POST",
      url: SIGN_IN_URL,
      data: {
        email: values.email,
        password: values.password,
        returnSecureToken: true
      },
      header: {
        "Content-Type": "application/json"
      }
    };
  };

  fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email" },
    { type: "pass", name: "password", placeholder: "Password" },
  ];

  render() {
    const { initialValues } = this.state;
    return (
      <FormTemplate
        initialValues={initialValues}
        generateAxiosObject={this.generateAxiosObject}
        fields={this.fieldsConfig}
        validationSchema={signInSchema}
      />
    );
  }
}

SignInForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignInForm;
