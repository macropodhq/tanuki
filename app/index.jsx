import React, {PropTypes} from 'react';
import _ from 'lodash';

const log = require('bows')('App');

import styles from './index.css';

const factions = [
  {color: 'red', name:'military', score: 0},
  {color: 'brown', name:'coin', score: 1},
  {color: 'grey', name:'wonder', score: 0},
  {color: 'yellow', name:'commerce', score: 1},
  {color: 'blue', name:'civilian', score: 0},
  {color: 'purple', name:'guild', score: 0},
  {color: 'green', name:'science', score: 0},
];

function handleScoreChange(name, evt) {
  const faction = _.findWhere(factions, {name: name});
  faction.score = Number(evt.target.value) || 0;
  render(factions);
}

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.App}>
        <h1>THE NEW APP</h1>
        <table>
          {this.props.data.map((faction) => (
            <tr>
              <td>{faction.name}</td>
              <td><input onChange={handleScoreChange.bind(null, faction.name)} type="text" value={faction.score} /></td>
            </tr>
          ))}
          <tfooter>
            <tr>
              <td>Total</td>
              <td>{this.props.data.reduce((val, item) => {
                return val + item.score;
              }, 0)}</td>
            </tr>
          </tfooter>
        </table>
      </div>
    );
  }
};

log('app starting up...');

function render(data) {
  React.render(<App data={data}/>, document.body);
}

render(factions);
