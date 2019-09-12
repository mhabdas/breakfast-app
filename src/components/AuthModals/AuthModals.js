import React, { useState, Suspense } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import Modal from "../../utils/Modal";
import Button from "../../utils/Button";

const AuthModals = () => {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const toggleModal = toggleData => {
    toggleData(prevState => !prevState);
  };

  return (
    <div>
      <Suspense fallback={<div />}>
        <Button large action={() => toggleModal(setSignIn)} title="Sign in" />
        <Button large action={() => toggleModal(setSignUp)} title="Sign up" />
        <Modal
          visible={signIn}
          closeModal={() => toggleModal(setSignIn)}
          title="Sign in"
          body={<SignInForm />}
        />
        <Modal
          visible={signUp}
          closeModal={() => toggleModal(setSignUp)}
          title="Sign up"
          body={<SignUpForm />}
        />
      </Suspense>
    </div>
  );
};

export default AuthModals;
