import * as React from "react";
import { MyProps, MyState } from "./types";

export default class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    return <div>HELLO WORLD</div>;
  }
}
