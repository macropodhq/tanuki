import React, {PropTypes} from 'react';

const log = require('bows')('App');

import styles from './index.css';

const colors = [
  {name: 'red', score: 1,},
  {name: 'yellow', score: 2,}
];

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>THE NEW APP</h1>
        {colors.map((color) => <span>{color.name} {color.score}</span>)}
      </div>
    );
  }
};

log('app starting up...');

React.render(<App/>, document.body);
