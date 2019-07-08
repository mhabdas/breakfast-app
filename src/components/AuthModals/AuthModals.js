import React, { Component } from "react";

import Button from "../../utils/Button";
import Modal from "../../utils/Modal";

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
          visible={this.state.signIn}
          title="Sign in"
          footer={
            <Button title="Close" action={() => this.toggleModal("signIn")} />
          }
        />
        <Modal
          visible={this.state.signUp}
          title="Sign up"
          footer={
            <Button title="Close" action={() => this.toggleModal("signUp")} />
          }
        />
      </div>
    );
  }
}

export default AuthModals;
