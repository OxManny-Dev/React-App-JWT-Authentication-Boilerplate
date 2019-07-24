import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {
  // Our onSubmit function in reduxForm first argument
  // the properties that the user has submitted from the form
  onSubmit = formProps => {
    console.log(formProps);
    this.props.signup(formProps, () => {
      // After the user signs in, we call the callback function
      // to redirect to /feature
      this.props.history.push('/feature');
    });

  }

  render(){
    // We are getting the handleSubmit function from reduxForm
    const { handleSubmit } = this.props;

    return (
      // handleSubmit takes a function to call
      // When the user submits this form
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {/*A fieldset is used to wrap a group of fields*/}
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
            autoComplete='none'/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'/>
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Signup</button>
      </form>
    )
  }
}


// Pull out the error message from our authReducer
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// Redux form takes an options object.
// The first key will be what you want to name the form

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup'})
)(Signup);
