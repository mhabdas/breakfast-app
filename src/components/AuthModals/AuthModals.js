import React, { Component, Suspense } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import Modal from "../../utils/Modal";
import Button from "../../utils/Button";


class AuthModals extends Component {
  state = {
    signIn: false,
    signUp: false
  };

  toggleModal = mode => {
    this.setState(prevProps => ({
      [mode]: !prevProps[mode]
    }));
  };

  render() {
    const { signUp, signIn } = this.state;
    return (
      <div>
        <Suspense fallback={<div />}>
          <Button
            large
            action={() => this.toggleModal("signIn")}
            title="Sign in"
          />
          <Button
            large
            action={() => this.toggleModal("signUp")}
            title="Sign up"
          />
          <Modal
            visible={signIn}
            closeModal={() => this.toggleModal("signIn")}
            title="Sign in"
            body={<SignInForm />}
          />
          <Modal
            visible={signUp}
            closeModal={() => this.toggleModal("signUp")}
            title="Sign up"
            body={<SignUpForm />}
          />
        </Suspense>
      </div>
    );
  }
}

export default AuthModals;
