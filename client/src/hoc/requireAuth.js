// We're making this a lowercase letter first because we are exporting by default a function
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  We are going to create a function that takes a component as a parameter
// So we can give that component extra functionality.


export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount(){
      this.shouldNavigateAway();
    }

    componentDidUpdate(){
      this.shouldNavigateAway();
    }

    shouldNavigateAway(){

      // Normally, if a user is logged in,
      // the auth state will be the token.
      // If they token is an empty string, it will be false,
      // We will redirect the user to the root route
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render(){
      // We are going to return the child component
      // And give it the props of this Higher order component
      // The only prop we are giving this component access to in this case
      // is the auth state below
      return <ChildComponent {...this.props}/>;
    }
  }

  // Pull out the the auth state and give access to
  // our higher order component,
  // so we can pass this down to the component we are passing into
  // our HOC
  function mapStateToProps({auth}){
    return { auth: auth.authenticated };
  }
  // Give our composed component access to our auth state
  return connect(mapStateToProps, null)(ComposedComponent);
}


