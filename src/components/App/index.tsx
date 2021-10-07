import * as React from "react";

type MyProps = {};

type MyState = {
  count: number;
};

export default class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    return <div>HELLO WORLD</div>;
  }
}
