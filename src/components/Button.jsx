import React from "react";
import styled from "styled-components";

const LoadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #333;
  }
`;

export default function Button({ onClick }) {
  return <LoadButton onClick={onClick}>Load More</LoadButton>;
}
