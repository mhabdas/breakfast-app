import React, { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import axios from "axios";

import { SIGN_UP_URL } from "../endpoints";
import Button from "../Button";

const FormTemplate = props => {
  const onSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: SIGN_UP_URL,
      data: {
        email: values.email,
        password: values.password,
        returnSecureToken: true
      },
      header: {
        "Content-Type": "application/json"
      }
    }).then(
      response => {
        actions.setSubmitting(false);
        console.log(response.data);
      },
      error => {
        actions.setSubmitting(false);
        actions.setErrors(error.response.data.error);
        actions.setStatus({ msg: "Error" });
        console.log(error.response.data.error);
      }
    );
  };

  const { initialValues } = props;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={this.onSubmit}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="email" component="div" />
          <Field type="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="email" component="div" />
          <Button title='Submit' action='submit' />
        </Form>
      )}
    />
  );
};

FormTemplate.propTypes = {
  initialValues: PropTypes.object
};

export default FormTemplate;
