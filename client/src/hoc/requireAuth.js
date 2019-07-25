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
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render(){
      return <ChildComponent {...this.props}/>;
    }
  }


  function mapStateToProps({auth}){
    return { auth: auth.authenticated };
  }

  return connect(mapStateToProps, null)(ComposedComponent);
}


