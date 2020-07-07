import React, { useState } from 'react'
import FormTemplate from '../../utils/Form'
import { signUpSchema } from '../../utils/validation'
import { withFirebase } from '../Firebase/FirebaseContext'
import Firebase from '../Firebase'

type SignUpType = {
  email: string
  password: string
  confirmPassword: string
}

type Props = {
  firebase: Firebase
}

const SignUpForm = (props: Props) => {
  const [initialValues] = useState<SignUpType>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const fieldsConfig = [
    { type: 'text', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
    {
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'Confirm password',
    },
  ]

  const onSuccessAction = (response: firebase.auth.UserCredential) => {
    console.log(response)
  }

  const {
    firebase: { doCreateUserWithEmailAndPassword },
  } = props
  return (
    <FormTemplate
      initialValues={initialValues}
      fields={fieldsConfig}
      validationSchema={signUpSchema}
      firebaseAction={doCreateUserWithEmailAndPassword}
      onSuccessAction={onSuccessAction}
      {...props}
    />
  )
}

export default withFirebase(SignUpForm)
