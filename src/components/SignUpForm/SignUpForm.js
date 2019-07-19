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

  render() {
    const { initialValues } = this.state;
    return (
      <FormTemplate
        initialValues={initialValues}
        fields={this.fieldsConfig}
        validationSchema={signUpSchema}
        {...this.props}
      />
    );
  }
}

SignUpForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignUpForm;
