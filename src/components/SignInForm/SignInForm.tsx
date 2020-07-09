import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import FormTemplate from '@utils/Form'
import { signInSchema } from '@utils/validation'
import { withFirebase } from '../Firebase/FirebaseContext'
import { UserStatus } from '../LandingPage'
import Firebase from '../Firebase'

type Props = {
  firebase: Firebase
}

const SignInForm = (props: Props) => {
  const [initialValues] = useState({
    email: '',
    password: '',
  })

  const fieldsConfig = [
    { type: 'text', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ]

  const { toggleSignedIn } = useContext(UserStatus)

  const onSuccessAction = () => {
    toggleSignedIn()
  }

  const {
    firebase: { doSignInWithEmailAndPassword },
  } = props
  return (
    <FormTemplate
      initialValues={initialValues}
      fields={fieldsConfig}
      validationSchema={signInSchema}
      firebaseAction={doSignInWithEmailAndPassword}
      onSuccessAction={onSuccessAction}
      {...props}
    />
  )
}

SignInForm.propTypes = {
  initialValues: PropTypes.object,
  firebase: PropTypes.object,
}

export default withFirebase(SignInForm)
