import React, { Component, PureComponent } from "react";

// by extending PureComponent, the component will only re-render when the props change
// equivalent to React.memo

// internally, PureComponent implements shouldComponentUpdate with a shallow comparison of props and state

// bottom line is, we're preventing unnecessary re-renders

export default class ClassChild extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // // if props are the same (shallow or deep comparison)
    // //     if state is the same
    // //         do not re-render
    // //     else
    // //         re-render
    // // the above logic is implemented in PureComponent

    // // if props are different
    // //     re-render

    console.log("nextProps", nextProps);
    console.log("this.props", this.props);
    return nextProps.count !== this.props.count;
  }

  render() {
    console.log("ClassChild rendering");

    return <div>ClassChild: {this.props.count}</div>;
  }
}
