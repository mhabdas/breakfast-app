import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { Error, Form, Input } from "./Form";
import Button from "../Button";

const FormTemplate = props => {
  const {
    initialValues,
    firebaseAction,
    fields,
    validationSchema,
  } = props;

  const onSubmit = (values, actions) => {
    console.log(values);
    firebaseAction(values).then(
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
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            {fields.map(field => (
              <div key={field.name}>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
                {errors[field.name] && touched[field.name] ? (
                  <Error>{errors[field.name]}</Error>
                ) : null}
              </div>
            ))}
            <Button title="Submit" action="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

FormTemplate.propTypes = {
  initialValues: PropTypes.object,
  url: PropTypes.string,
  firebaseAction: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.object),
  validationSchema: PropTypes.object
};

export default FormTemplate;
