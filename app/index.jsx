import React, {PropTypes} from 'react';

const log = require('bows')('App');

import styles from './index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>THE NEW APP</h1>
      </div>
    );
  }
};

log('app starting up...');

React.render(<App/>, document.body);
