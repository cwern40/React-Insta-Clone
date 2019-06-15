import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
