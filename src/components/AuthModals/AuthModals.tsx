import React, { useState, Suspense, SetStateAction, Dispatch } from 'react'
import SignUpForm from '../SignUpForm'
import SignInForm from '../SignInForm'
import Modal from '../../utils/Modal'
import Button from '../../utils/Button'

const AuthModals = () => {
  const [signIn, setSignIn] = useState<boolean>(false)
  const [signUp, setSignUp] = useState<boolean>(false)

  const toggleModal = (toggleData: Dispatch<SetStateAction<boolean>>) => {
    toggleData((prevState: boolean) => !prevState)
  }

  return (
    <div>
      <Suspense fallback={<div />}>
        <Button large action={() => toggleModal(setSignIn)} title="Sign in" />
        <Button large action={() => toggleModal(setSignUp)} title="Sign up" />
        <Modal visible={signIn} closeModal={() => toggleModal(setSignIn)} title="Sign in" body={<SignInForm />} />
        <Modal visible={signUp} closeModal={() => toggleModal(setSignUp)} title="Sign up" body={<SignUpForm />} />
      </Suspense>
    </div>
  )
}

export default AuthModals
