import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { signInSchema } from "../../utils/validation";

class SignInForm extends Component {
  state = {
    initialValues: {
      email: "",
      password: ""
    }
  };

  fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email" },
    { type: "password", name: "password", placeholder: "Password" }
  ];

  render() {
    const { initialValues } = this.state;
    return (
      <FormTemplate
        initialValues={initialValues}
        fields={this.fieldsConfig}
        validationSchema={signInSchema}
        {...this.props}
      />
    );
  }
}

SignInForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignInForm;
