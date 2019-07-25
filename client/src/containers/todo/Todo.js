import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import validator from 'validator';

class Todo extends Component {


  // Redux forms is about about automating processes
  // making sure our data gets to the store
  // and also getting to the reducers
  // It doesn't really know what you're doing
  // It's just going to assume you're going to do the right thing


  renderError = ({ error, touched }) => {
    if(touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    // We can see the values that redux form is already doing the job for us
    // console.log(formProps);
    // return <input
    //   onChange={formProps.input.onChange}
    //   value={formProps.input.value}
    // />;

    // This line gives us access to the error property as well as form controls
    console.log(meta);
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
      );
  }

  // Under the hood, handleSubmit is already doing the event.preventDefault for us
  // the parameter it takes is then values that are in the form

  onSubmit = (formValues) => {
    this.props.addTodo(formValues);
  }

  render(){
    // Shows the props of this component
    // console.log(this.props);
    return (
      // This handleSubmit function is given to us by redux form.
      // It takes a function to call when the form is submitted.
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {/* A field is used whenever we want to render some type of input onto the page
            It takes a name prop. The name of the property that this field is going to manage
            We can pass is a component prop to tell it what to render on the screen.
            We can also pss other props that it doesn't know about,
            and the function that we pass into it is automatically going to take that prop
        */}

        <Field
          name='title'
          component={this.renderInput}
          label='Enter title'/>
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button>Submit</button>
      </form>
    )
  }
}


// Our validation function takes 1 parameter.
// An object that contains all of the names of each inputs
// that are in our form
const validate = formValues => {
  const errors = {};
  console.log('form', formValues);
  // console.log(validator.isEmail(formValues.title));
  if(!formValues.title) {
  //
    errors.title = 'You must enter a title';
  }

  if(formValues.title) {
    if(!validator.isEmail(formValues.title)) {
      errors.title = 'check'
    }
  }

  if(!formValues.description){
    errors.description = 'You must enter a description'
  }

  // If redux forms sees that we return an empty object,
  // when we try to submit. It's going to assume everything is ok
  return errors;
};

const formWrapped =  reduxForm({
  form: 'todo',
  validate
})(Todo);

export default connect(null, { addTodo })(formWrapped);