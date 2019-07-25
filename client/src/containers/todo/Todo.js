import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Todo extends Component {
  render(){
    return (
      <div>
        <h1>Todo Component</h1>
      </div>
    )
  }
}

export default reduxForm()(Todo);