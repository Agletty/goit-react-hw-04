import { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchPhotos from "./components/servises/api";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total_pages, setTotalPages] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetchPhotos(query, page);
        // console.log("API Response:", data);
        setImages(data);

        setTotalPages(data.total_pages);

        setShowBtn(total_pages && total_pages !== page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page, total_pages]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isError && <ErrorMessage />}

      {!images || images.length === 0 ? (
        <p>No images available</p>
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}

      {isLoading && <Loader />}

      {showBtn && <LoadMoreBtn onLoadMore={handleNextPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
