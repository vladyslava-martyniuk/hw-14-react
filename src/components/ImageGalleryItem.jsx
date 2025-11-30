import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    const { src, onClick } = this.props;
    return (
      <img
        src={src}
        alt=""
        style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
        onClick={onClick}
      />
    );
  }
}
