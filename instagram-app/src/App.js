import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
