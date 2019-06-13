import React from 'react';
import './App.css';
import dummyData from './dumm-data';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      post: dummyData
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
