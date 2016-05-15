import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      img: require(`assets/svgs/${props.path}.svg`) || null
    };
  }
  render() {
    return (
      <svg>
        <use xlinkHref={this.state.img}></use>
      </svg>
    );
  }
}
