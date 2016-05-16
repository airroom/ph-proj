import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import Helmet from 'react-helmet';

import { CollectionList } from '../../components';
import * as collectionsActions from 'redux/modules/collections';
import { load } from 'redux/modules/collections';

@asyncConnect([{
  deferred: true,
  promise: ({store: { dispatch }}) => dispatch(load())
}])
@connect(state => ({
  items: state.collections.items
}), {...collectionsActions})
export default class Home extends Component {
  static propTypes = {
    items: PropTypes.array
  };
  render() {
    return (
      <section className="container">
        <Helmet title="Home" />
        <div className="row">
          <nav className="col-sm-2"></nav>
          <article className="col-sm-8">
            {JSON.stringify(this.props.items)}
            <CollectionList />
          </article>
        </div>
      </section>
    );
  }
}
