import React from "react";
import styled from "styled-components";

const Comment = styled.li`
  width: 75%;
  list-style: none;
`;

export default ({ comment }) => {
  return (
    <Comment>
      <p>{comment.title}</p>
      <p>{comment.body}</p>
    </Comment>
  );
};
