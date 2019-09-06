import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { signInSchema } from "../../utils/validation";
import { withFirebase } from "../Firebase/context";

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

  onSuccessAction = (response) => {
    console.log(response);
  };

    render() {
    const { initialValues } = this.state;
    const {
      firebase: { doSignInWithEmailAndPassword }
    } = this.props;
    return (
      <FormTemplate
        initialValues={initialValues}
        fields={this.fieldsConfig}
        validationSchema={signInSchema}
        firebaseAction={doSignInWithEmailAndPassword}
        onSuccessAction={this.onSuccessAction}
        {...this.props}
      />
    );
  }
}

SignInForm.propTypes = {
  initialValues: PropTypes.object,
  firebase: PropTypes.object
};

export default withFirebase(SignInForm);
