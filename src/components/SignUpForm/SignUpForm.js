import React from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";

const SignUpForm = () => {
    const { initialValues } = this.props;
    return <FormTemplate initialValues={initialValues} />;
  };

SignUpForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignUpForm;
