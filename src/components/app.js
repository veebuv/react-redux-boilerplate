import React, { Component } from 'react';
import styles from './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    const { initialMessage } = this.state;
    return (
      <div className={styles.root}>
        {initialMessage}
      </div>
    );
  }
}
