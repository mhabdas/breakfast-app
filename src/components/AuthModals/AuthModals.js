import React, { Component, Suspense } from "react";

const Button = React.lazy(() => import("../../utils/Button"));
const Modal = React.lazy(() => import("../../utils/Modal"));
const SignUpForm = React.lazy(() => import("../SignUpForm/SignUpForm"));
const SignInForm = React.lazy(() => import("../SignInForm/SignInForm"));

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
            title="Sign in"
            body={<SignInForm />}
            footer={
              <div>
                <Button title="Submit" action="submit" />
                <Button
                  title="Close"
                  action={() => this.toggleModal("signIn")}
                />
              </div>
            }
          />
          <Modal
            visible={signUp}
            title="Sign up"
            body={<SignUpForm />}
            footer={
              <div>
                <Button
                  title="Close"
                  action={() => this.toggleModal("signUp")}
                />
              </div>
            }
          />
        </Suspense>
      </div>
    );
  }
}

export default AuthModals;
