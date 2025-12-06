import React, { Component } from "react";
import styled from "styled-components";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

const API_KEY = "49388392-02e817ef61ae4618fbf814ce7";
const PER_PAGE = 12;

const Container = styled.div`
  padding: 20px;
`;

export default class App extends Component {
  state = {
    query: "cat", 
    page: 1,
    images: [],
    loading: false,
    modalImage: null,
    totalHits: 0, 
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    if (!query) return;

    this.setState({ loading: true });

    try {
      const url = `https://pixabay.com/api/?q=${encodeURIComponent(
        query
      )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

      const res = await fetch(url);
      const data = await res.json();

      this.setState((prev) => ({
        images: [...prev.images, ...data.hits],
        totalHits: data.totalHits, // ДОДАНО
      }));
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (query) => {
    this.setState(
      { query, page: 1, images: [], totalHits: 0 },
      this.fetchImages
    );
  };

  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }), this.fetchImages);
  };

  openModal = (src) => {
    this.setState({ modalImage: src });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  render() {
    const { images, loading, modalImage, totalHits } = this.state;

    const shouldShowButton =
      images.length > 0 &&
      !loading &&
      images.length < totalHits; 

    return (
      <Container>
        <h1>Image finder</h1>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onItemClick={this.openModal} />
        {loading && <Loader />}
        {shouldShowButton && <Button onClick={this.loadMore} />}
        {modalImage && <Modal src={modalImage} onClose={this.closeModal} />}
      </Container>
    );
  }
}
