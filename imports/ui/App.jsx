import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// import { Climbs } from '../api/climbs.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <header>
          <h1>Climb On</h1>
          <AccountsUIWrapper />
          <p>{Meteor.user().username}</p>
        </header>
      </div>
    );
  }
}

App.propTypes = {

};

// export default createContainer(() => {
//   Meteor.subscribe('climbs');
//
//   return {
//     climbs: Climbs.find({}, sort: { })
//   };
// }, App);
