import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  render() {
    return (
      <div>Hello</div>
    )
  }
}

console.log("hogehoge");
render(<App />, document.getElementById('app'));
console.log("hugahuga");
