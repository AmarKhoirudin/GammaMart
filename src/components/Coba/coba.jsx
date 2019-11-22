import React, { Component } from "react";
import Axios from "axios";

class Coba extends Component {
    state={
        dataUser: []
    }
  componentDidMount() {
    Axios.get("https://stark-harbor-77200.herokuapp.com/api/user/1").then(res => {
        const dataUSer = JSON.stringify(res)
        this.setState({
            dataUSer
        }, () => console.log(this.state.dataUSer))
    });
  }

  render() {
    return (
      <div>
        <h1>Berhasil Nyoba</h1>
      </div>
    );
  }
}
export default Coba;
