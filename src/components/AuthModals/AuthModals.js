import React, { Component, Suspense } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import FirebaseContext from "../Firebase/context";

const Button = React.lazy(() => import("../../utils/Button"));
const Modal = React.lazy(() => import("../../utils/Modal"));
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
            closeModal={() => this.toggleModal("signIn")}
            title="Sign in"
            body={
              <FirebaseContext.Consumer>
                {firebase => <SignInForm firebase={firebase} />}
              </FirebaseContext.Consumer>
            }
          />
          <Modal
            visible={signUp}
            closeModal={() => this.toggleModal("signUp")}
            title="Sign up"
            body={
              <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase={firebase} />}
              </FirebaseContext.Consumer>
            }
          />
        </Suspense>
      </div>
    );
  }
}

export default AuthModals;
