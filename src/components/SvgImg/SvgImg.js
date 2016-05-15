import React, { Component, PropTypes } from 'react';

export default class SvgImg extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img src={require('../../../static/svg/logo.svg')} />
    );
  }
}
