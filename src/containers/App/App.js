import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import config from '../../config';

import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  renderHeader() {
    return (
      <nav className={`navbar m-b-2 ${styles['app-header']}`}>
        <div className="container">
          <IndexLink to="/" className="navbar-brand" title="Home">
            <img src={require('../../../static/svg/logo.svg')} />
          </IndexLink>
        </div>
      </nav>
    );
  }
  render() {
    return (
      <div>
        <Helmet {...config.app.head}/>
        {this.renderHeader()}
        {this.props.children}
      </div>
    );
  }
}
