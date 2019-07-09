import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import axios from "axios";

import { Form, Input } from "./Form";

const FormTemplate = props => {
  const { initialValues, generateAxiosObject, fields } = props;

  const onSubmit = (values, actions) => {
    axios({
      ...generateAxiosObject(values)
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={(
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit
      ) => (
        <Form onSubmit={handleSubmit}>
          {fields.map(field => (
            <Input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
            />
          ))}
        </Form>
      )}
    />
  );
};

FormTemplate.propTypes = {
  initialValues: PropTypes.object,
  url: PropTypes.string,
  generateAxiosObject: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
};

export default FormTemplate;
