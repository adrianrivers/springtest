import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

import Comment from './components/Comment/Comment'

class App extends Component {
  state = {
    user: [],
    comments: []
  };

  async componentDidMount() {
    try {
      const userData = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const commentData = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
      const res = await Promise.all([userData, commentData]);
      const dataPromises = res.map(r => r.json());
      const [user, comments] = await Promise.all(dataPromises);

      this.setState({
        user: user,
        comments: comments
      });

    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-content">
          <h3>Spring Coding Challenge</h3>
          <div>
            <ul>
              {
                this.state.comments.map(comment => <Comment comment={comment} key={comment.id} />)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
