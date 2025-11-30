import React, { Component } from "react";
import styled from "styled-components";

const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
  }

  button {
    padding: 8px 16px;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

export default class Searchbar extends Component {
  state = { query: "" };

  handleChange = (e) => this.setState({ query: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query.trim();
    if (!query) return;

    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchBar onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search images"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </SearchBar>
    );
  }
}
