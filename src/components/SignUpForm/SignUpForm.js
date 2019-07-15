import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { signUpSchema } from "../../utils/validation";
import FirebaseContext from "../Firebase/context";

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
    const {
      initialValues,
      // firebase: { doCreateUserWithEmailAndPassword }
    } = this.state;
    return (
      <FirebaseContext.Consumer>
        {firebase => <FormTemplate
        initialValues={initialValues}
        fields={this.fieldsConfig}
        validationSchema={signUpSchema}
        firebase={firebase}
        // firebaseAction={doCreateUserWithEmailAndPassword}
      />}
      </FirebaseContext.Consumer>
    );
  }
}

SignUpForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignUpForm;
