import React from 'react';
import AppList from './AppList'

class MyApp extends React.Component {

  render() {
    return (
      <div>
        <h1>My App</h1>
        <h3>Passing Data Between Parent and Child Components</h3>
        <AppList />
      </div>
    )
  }
};

export default MyApp;
