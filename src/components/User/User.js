import React from "react";
import styled from "styled-components";

const User = styled.div`
  margin-top: 3em;
  width: 75%;
  border-top: 2px solid #26227e;
  border-bottom: 2px solid #26227e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1em;
  h3 {
    color: #26227e;
  }
`;

const ReadMore = styled.div`
  a {
    font-size: 28px;
    transition: 0.3s ease;
    cursor: pointer;
    padding: 1em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ({ user, clicked }) => {
  return (
    <User>
      <div>
        <h3>{user.username}</h3>
        <p>{user.name}</p>
      </div>
      <ReadMore>
        <a onClick={clicked}>+</a>
      </ReadMore>
    </User>
  );
};
