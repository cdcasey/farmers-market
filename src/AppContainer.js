// import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from './redux/actions';
import App from './App';

export default connect(
  null,
  { addItemToCart }
)(App);
