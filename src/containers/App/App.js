import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet {...config.app.head} />
      </div>
    );
  }
}
