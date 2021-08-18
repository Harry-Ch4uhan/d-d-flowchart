import React, { Component } from "react";

import "./App.css";

import WsManager from "../WorkSheet Manager/WsManager";

class App extends Component {
  state = {
    activeSheet: 0,
  };

  switchSheet = () => {
    this.setState({ activeSheet: 1 });
    console.log(this.state.activeSheet);
  };

  render() {
    return (
      <>
        <WsManager
          changeSheet={this.switchSheet}
          activeSheet={this.state.activeSheet}
        />
      </>
    );
  }
}
export default App;
