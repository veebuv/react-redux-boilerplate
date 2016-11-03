import React, { Component } from 'react';
import { Link } from 'react-router';

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
      <div>
        <div>
          <Link to="about/James" className="btn btn-danger" > ABOUT </Link>
          <Link to="inbox" className="btn btn-success"> INBOX </Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
