import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

import requireAuth from './../hoc/requireAuth';

class Counter extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Current counter state: {this.props.counter}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { counter: state.counter.counter }
}

export default requireAuth(connect(mapStateToProps, actions)(Counter))

