import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.png";
import "./App.css";
import Comment from "./components/Comment/Comment";
import User from "./components/User/User";

const LogoContainer = styled.div`
  width: 33.33%;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 73.33%;
  margin-top: 4em;
  padding-left: 2em;
  ul {
    padding: 0;
    transition: 13s ease;
  }
`;

class App extends Component {
  state = {
    user: [],
    comments: [],
    showComments: false
  };

  async componentDidMount() {
    try {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const commentData = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
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

  showCommentsHandler = e => {
    const doesShow = this.state.readMore;
    this.setState({
      showComments: !doesShow
    });
  };

  render() {

    let comments = null;
    if (this.state.showComments) {
      comments = (
        this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))
      );
    }

    return (
      <div className="App">
        <LogoContainer>
          <img src={logo} className="App-logo" alt="logo" />
        </LogoContainer>
        <Content>
          <h3>Spring Coding Challenge</h3>
          <User user={this.state.user} clicked={this.showCommentsHandler} />
          <ul>
            {comments}
          </ul>
        </Content>
      </div>
    );
  }
}

export default App;
