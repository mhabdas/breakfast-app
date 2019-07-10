import React, { Component } from "react";

import Button from "../../utils/Button";
import Modal from "../../utils/Modal";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";

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
              <Button title="Close" action={() => this.toggleModal("signIn")} />
            </div>
          }
        />
        <Modal
          visible={signUp}
          title="Sign up"
          body={<SignUpForm />}
          footer={
            <div>
              <Button title="Submit" action="submit" />
              <Button title="Close" action={() => this.toggleModal("signUp")} />
            </div>
          }
        />
      </div>
    );
  }
}

export default AuthModals;
