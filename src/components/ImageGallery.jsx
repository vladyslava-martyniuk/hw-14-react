import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  render() {
    const { images, onItemClick } = this.props;

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {images.map((img) => (
          <ImageGalleryItem
            key={img.id}
            src={img.webformatURL}
            onClick={() => onItemClick(img.largeImageURL)}
          />
        ))}
      </div>
    );
  }
}
