import React, { Component } from "react";
import LoginCon from "../components/login/Login";

class Login extends Component {
  state = {
    name: "",
    password: ""
  };
  onChangeLogin = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onSubmitLogin = e => {
    e.preventDefault();
    alert("berhasil bambang");
  };
  render() {
    const { name, password } = this.state;
    const { onChangeLogin, onSubmitLogin } = this;
    return (
      <div>
        <LoginCon
          // name
          nama="name"
          valueName={name}
          // password
          namePassword="password"
          valuePassword={password}
          //   sama
          onChange={onChangeLogin}
          onSubmit={onSubmitLogin}
        />
      </div>
    );
  }
}
export default Login;
