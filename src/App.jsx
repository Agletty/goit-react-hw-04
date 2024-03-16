import { useState, useEffect } from "react";
import Modal from "react-modal";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchPhotos from "./components/servises/api";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

Modal.setAppElement("#root");

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        let data;
        if (query) {
          data = await fetchPhotos(query, page);

          setImages((prevImages) =>
            page === 1 ? data.results : [...prevImages, ...data.results]
          );
        } else {
          data = await fetchPhotos("", page);

          setImages((prevImages) => [...prevImages, ...data]);
        }

        console.log("API Response:", data);

        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    setShowBtn(totalPages !== null && totalPages !== page);
  }, [totalPages, page]);

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
        <ImageGallery images={images} openModal={openModal} />
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
