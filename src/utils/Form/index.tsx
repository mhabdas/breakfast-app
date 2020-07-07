import React from 'react'
import { Formik } from 'formik'
import { Error, Form, Input } from './Form'
import Button from '../Button'

type StatusType = {
  msg: string
}

type FormKeys = 'password' | 'email'

type FormValuesType = {
  [key in FormKeys]: string
}

type FieldsType = {
  type: string
  name: string
  placeholder: string
}

type ActionsType = {
  setSubmitting: (value: boolean) => void
  setStatus: (value: StatusType) => void
}

type Props = {
  initialValues: FormValuesType
  fields: FieldsType[]
  validationSchema: any
  firebaseAction: (values: FormValuesType) => Promise<firebase.auth.UserCredential>
  onSuccessAction: (response: firebase.auth.UserCredential) => void
}

const FormTemplate = (props: Props) => {
  const { initialValues, fields, validationSchema, firebaseAction, onSuccessAction } = props

  const onSubmit = (values: FormValuesType, actions: ActionsType) => {
    firebaseAction(values).then(
      (response: firebase.auth.UserCredential) => {
        actions.setSubmitting(false)
        onSuccessAction && onSuccessAction(response)
      },
      (error: ErrorEvent) => {
        actions.setSubmitting(false)
        actions.setStatus({ msg: error.message })
      },
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, status }) => {
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
                {errors[field.name] && touched[field.name] ? <Error>{errors[field.name]}</Error> : null}
              </div>
            ))}
            {status && status.msg && <Error>{status.msg}</Error>}
            <Button title="Submit" action="submit" />
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormTemplate
