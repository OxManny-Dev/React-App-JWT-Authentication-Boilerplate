import React, { Component } from 'react';

class Signup extends Component {
  render(){
    return (
      <form>
        {/*A fieldset is used to wrap a group of fields*/}
        <fieldset>
          <label>Email</label>
          <input/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input/>
        </fieldset>
      </form>
    )
  }
}

export default Signup