import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      post: [],
      foundPosts: []
    };
  }

  componentDidMount() {
    console.log("CDM", this.state.post)
    this.setState({ post: dummyData });
  };

  searchHandler = e => {
    const posts = this.state.post.filter( post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ foundPosts: posts});
  };

  render() {
    console.log("Render", this.state.post)
    return (
      <div>
        <SearchBar searchHandler={this.searchHandler}/>
        <PostContainer post={
          this.state.foundPosts.length > 0
           ? this.state.foundPosts 
           : this.state.post} />
      </div>
    );
  }
}

export default App;
