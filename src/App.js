import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/config";
import RootContainer from "./containers/RootContainer/RootContainer";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
