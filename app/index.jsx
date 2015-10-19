import React from 'react';

var log = require('bows')('App');

require('./index.css');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>THE NEW APP</h1>
      </div>
    );
  }
};

React.render(<App/>, document.body);

