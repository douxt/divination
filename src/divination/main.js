
import React, {Component} from 'react';
import {Divination} from './divination';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container} id={'main'}>
        <Divination/>
      </div>
    );
  }
}
